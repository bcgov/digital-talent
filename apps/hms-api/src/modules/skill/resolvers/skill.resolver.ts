import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { GraphQLUUID } from 'graphql-scalars';
import {
  ApplicationSkill,
  CompetitionSkill,
  FindManySkillArgs,
  OpportunitySkill,
  Skill,
} from '../../../@generated/prisma-nestjs-graphql';
import { GetApplicationSkillsQuery } from '../../application/application-skill/queries/get-application-skills/get-application-skills.query';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import { GetCompetitionSkillsQuery } from '../../competition/competition-skill/queries/get-competition-skills/get-competition-skills.query';
import { GetOpportunitySkillsQuery } from '../../opportunity/opportunity-skill/queries/get-opportunity-skills/get-opportunity-skills.query';
import { CreateSkillCommand } from '../commands/create-skill/create-skill.command';
import { DeleteSkillCommand } from '../commands/delete-skill/delete-skill.command';
import { UpdateSkillCommand } from '../commands/update-skill/update-skill.command';
import { CreateSkillInput } from '../inputs/create-skill.input';
import { UpdateSkillInput } from '../inputs/update-skill.input';
import { GetSkillQuery } from '../queries/get-skill/get-skill.query';
import { GetSkillsQuery } from '../queries/get-skills/get-skills.query';

@Resolver((of) => Skill)
export class SkillResolver {
  constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

  @Mutation((returns) => GraphQLString)
  async createSkill(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'data', type: () => CreateSkillInput }) data: CreateSkillInput,
  ) {
    const { id, ...restData } = data;
    const command = new CreateSkillCommand({ id, ...restData }, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Mutation((returns) => GraphQLString)
  async updateSkill(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'data', type: () => UpdateSkillInput }) data: UpdateSkillInput,
  ) {
    const command = new UpdateSkillCommand(data, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Mutation((returns) => GraphQLString)
  async deleteSkill(@CurrentUser() { id: userId }: Express.User, @Args({ name: 'id', type: () => String }) id: string) {
    const command = new DeleteSkillCommand({ id }, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Query((returns) => [Skill])
  async skills(@Args() args?: FindManySkillArgs) {
    return this.queryBus.execute(new GetSkillsQuery(args));
  }

  @Query((returns) => Skill)
  async skill(@Args({ name: 'id', type: () => GraphQLUUID }) id: string) {
    return this.queryBus.execute(new GetSkillQuery(id));
  }

  @ResolveField('applications', (returns) => [ApplicationSkill])
  applications(@Parent() skill: Skill) {
    return this.queryBus.execute(new GetApplicationSkillsQuery({ where: { skill_id: { equals: skill.id } } }));
  }

  @ResolveField('competitions', (returns) => [CompetitionSkill])
  compmetitions(@Parent() skill: Skill) {
    return this.queryBus.execute(new GetCompetitionSkillsQuery({ where: { skill_id: { equals: skill.id } } }));
  }

  @ResolveField('opportunities', (returns) => [OpportunitySkill])
  opportunities(@Parent() skill: Skill) {
    return this.queryBus.execute(new GetOpportunitySkillsQuery({ where: { skill_id: { equals: skill.id } } }));
  }
}
