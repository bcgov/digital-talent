import { CommandBus } from '@nestjs/cqrs';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { CreateCompetitionScheduleCommand } from './commands/create-competition-schedule/create-competition-schedule.command';
import { UpdateCompetitionScheduleCommand } from './commands/update-competition-schedule/update-competition-schedule.command';
import { CompetitionScheduleEntity } from './entities/competition-schedule.entity';
import { CreateCompetitionScheduleInput } from './inputs/competition-schedule.input';

@Resolver((of) => CompetitionScheduleEntity)
export class CompetitionScheduleResolver {
  constructor(private readonly commandBus: CommandBus) {}

  @Mutation((returns) => GraphQLString)
  async createCompetitionSchedule(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'data', type: () => CreateCompetitionScheduleInput }) data: CreateCompetitionScheduleInput,
  ) {
    const command = new CreateCompetitionScheduleCommand(data, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Mutation((returns) => GraphQLString)
  async updateCompetitionSchedule(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'data', type: () => CreateCompetitionScheduleInput }) data: CreateCompetitionScheduleInput,
  ) {
    const command = new UpdateCompetitionScheduleCommand(data, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }
}
