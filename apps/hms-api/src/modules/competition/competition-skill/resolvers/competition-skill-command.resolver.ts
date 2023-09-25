import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, Mutation, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { Competition, CompetitionSkill, Skill } from '../../../../@generated/prisma-nestjs-graphql';
import { CurrentUser } from '../../../auth/decorators/current-user.decorator';
import { GetSkillQuery } from '../../../skill/queries/get-skill/get-skill.query';
import { GetCompetitionQuery } from '../../competition/queries/get-competition/get-competition.query';
import { AddCompetitionSkillCommand } from '../commands/add-competition-skill/add-competition-skill.command';
import { RemoveCompetitionSkillCommand } from '../commands/remove-competition-skill/remove-competition-skill.command';
import { AddCompetitionSkillInput } from '../inputs/add-competition-skill.input';
import { RemoveCompetitionSkillInput } from '../inputs/remove-competition-skill.input';

@Resolver((of) => CompetitionSkill)
export class CompetitionSkillCommandResolver {
  constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

  @Mutation((returns) => GraphQLString)
  async addCompetitionSkill(
    @CurrentUser() user: Express.User,
    @Args({ name: 'data', type: () => AddCompetitionSkillInput }) data: AddCompetitionSkillInput,
  ) {
    const command = new AddCompetitionSkillCommand(data, { created_by: user.id });
    await this.commandBus.execute(command);

    return `${command.data.competition_id}-${command.data.skill_id}`;
  }

  @Mutation((returns) => GraphQLString)
  async removeCompetitionSkill(
    @CurrentUser() user: Express.User,
    @Args({ name: 'data', type: () => RemoveCompetitionSkillInput }) data: RemoveCompetitionSkillInput,
  ) {
    const command = new RemoveCompetitionSkillCommand(data, { created_by: user.id });
    await this.commandBus.execute(command);

    return `${command.data.competition_id}-${command.data.skill_id}`;
  }

  @ResolveField('competition', (returns) => Competition)
  async getCompetition(@Parent() competitionSkill: CompetitionSkill) {
    return this.queryBus.execute(new GetCompetitionQuery(competitionSkill.competition_id));
  }

  @ResolveField('skill', (returns) => Skill)
  async getSkill(@Parent() competitionSkill: CompetitionSkill) {
    return this.queryBus.execute(new GetSkillQuery(competitionSkill.skill_id));
  }
}
