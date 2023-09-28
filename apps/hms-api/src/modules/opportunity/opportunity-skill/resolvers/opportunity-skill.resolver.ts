import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import {
  FindManyOpportunitySkillArgs,
  Opportunity,
  OpportunitySkill,
  Skill,
} from '../../../../@generated/prisma-nestjs-graphql';
import { CurrentUser } from '../../../auth/decorators/current-user.decorator';
import { GetSkillQuery } from '../../../skill/queries/get-skill/get-skill.query';
import { GetOpportunityQuery } from '../../opportunity/queries/get-opportunity/get-opportunity.query';
import { CreateOpportunitySkillCommand } from '../commands/create-opportunity-skill/create-opportunity-skill.command';
import { DeleteOpportunitySkillCommand } from '../commands/delete-opportunity-skill/delete-opportunity-skill.command';
import { CreateOpportunitySkillInput } from '../inputs/create-opportunity-skill.input';
import { GetOpportunitySkillQuery } from '../queries/get-opportunity-skill/get-opportunity-skill.query';
import { GetOpportunitySkillsQuery } from '../queries/get-opportunity-skills/get-opportunity-skills.query';

@Resolver((of) => OpportunitySkill)
export class OpportunitySkillResolver {
  constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

  @Mutation((returns) => GraphQLString)
  async createOpportunitySkill(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'data', type: () => CreateOpportunitySkillInput }) data: CreateOpportunitySkillInput,
  ) {
    const { opportunity_id, skill_id, ...restData } = data;
    const command = new CreateOpportunitySkillCommand(
      { opportunity_id, skill_id, ...restData },
      { created_by: userId },
    );
    await this.commandBus.execute(command);
    return command.data.opportunity_id;
  }

  @Mutation((returns) => GraphQLString)
  async deleteOpportunitySkill(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'opportunity_id', type: () => String }) opportunity_id: string,
    @Args({ name: 'skill_id', type: () => String }) skill_id: string,
  ) {
    const command = new DeleteOpportunitySkillCommand({ opportunity_id, skill_id }, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.opportunity_id;
  }

  @Query((returns) => [OpportunitySkill])
  async opportunitySkills(@Args() args?: FindManyOpportunitySkillArgs) {
    return this.queryBus.execute(new GetOpportunitySkillsQuery(args));
  }

  @Query((returns) => OpportunitySkill)
  async opportunitySkill(
    @Args({ name: 'opportunity_id', type: () => String }) opportunity_id: string,
    @Args({ name: 'skill_id', type: () => String }) skill_id: string,
  ) {
    return this.queryBus.execute(new GetOpportunitySkillQuery(opportunity_id, skill_id));
  }

  @ResolveField('opportunity', (returns) => Opportunity)
  async opportunity(@Parent() opportunitySkill: OpportunitySkill) {
    return this.queryBus.execute(new GetOpportunityQuery(opportunitySkill.opportunity_id));
  }

  @ResolveField('skill', (returns) => Skill)
  async skill(@Parent() opportunitySkill: OpportunitySkill) {
    return this.queryBus.execute(new GetSkillQuery(opportunitySkill.skill_id));
  }
}
