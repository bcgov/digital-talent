import { CommandBus } from '@nestjs/cqrs';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateOpportunitySkillCommand } from './commands/create-opportunity-skill/create-opportunity-skill.command';
import { DeleteOpportunitySkillCommand } from './commands/delete-opportunity-skill/delete-opportunity-skill.command';
import { OpportunitySkillEntity } from './entities/opportunity-skill.entity';
import { CreateOpportunitySkillInput } from './inputs/create-opportunity-skill.input';

@Resolver((of) => OpportunitySkillEntity)
export class OpportunitySkillResolver {
  constructor(private readonly commandBus: CommandBus, private readonly prisma: PrismaService) {}

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

  @Query((returns) => [OpportunitySkillEntity])
  async opportunitySkills() {
    return this.prisma.opportunitySkill.findMany();
  }

  @Query((returns) => OpportunitySkillEntity)
  async opportunitySkill(
    @Args({ name: 'opportunity_id', type: () => String }) opportunity_id: string,
    @Args({ name: 'skill_id', type: () => String }) skill_id: string,
  ) {
    return this.prisma.opportunitySkill.findUnique({
      where: {
        opportunity_id_skill_id: {
          opportunity_id,
          skill_id,
        },
      },
    });
  }
}
