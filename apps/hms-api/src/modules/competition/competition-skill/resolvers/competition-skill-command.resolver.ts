import { CommandBus } from '@nestjs/cqrs';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { CurrentUser } from '../../../auth/decorators/current-user.decorator';
import { AddCompetitionSkillCommand } from '../commands/add-competition-skill/add-competition-skill.command';
import { RemoveCompetitionSkillCommand } from '../commands/remove-competition-skill/remove-competition-skill.command';
import { AddCompetitionSkillInput } from '../inputs/add-competition-skill.input';
import { RemoveCompetitionSkillInput } from '../inputs/remove-competition-skill.input';

@Resolver((of) => GraphQLString)
export class CompetitionSkillCommandResolver {
  constructor(private readonly commandBus: CommandBus) {}

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
}
