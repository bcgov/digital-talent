import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { Competition, CompetitionSchedule } from '../../../@generated/prisma-nestjs-graphql';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import { GetCompetitionQuery } from '../../competition/competition/queries/get-competition/get-competition.query';
import { CreateCompetitionScheduleCommand } from '../commands/create-competition-schedule/create-competition-schedule.command';
import { DeleteCompetitionScheduleCommand } from '../commands/delete-competition-schedule/delete-competition-schedule.command';
import { UpdateCompetitionScheduleCommand } from '../commands/update-competition-schedule/update-competition-schedule.command';
import { CreateCompetitionScheduleInput } from '../inputs/create-competition-schedule.input';
import { UpdateCompetitionScheduleInput } from '../inputs/update-competition-schedule.input';
import { GetCompetitionScheduleQuery } from '../queries/get-competition-schedule/get-competition-schedule.query';
import { GetCompetitionSchedulesQuery } from '../queries/get-competition-schedules/get-competition-schedules.query';

@Resolver((of) => CompetitionSchedule)
export class CompetitionScheduleResolver {
  constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

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
    @Args({ name: 'data', type: () => UpdateCompetitionScheduleInput }) data: UpdateCompetitionScheduleInput,
  ) {
    const command = new UpdateCompetitionScheduleCommand(data, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Mutation((returns) => GraphQLString)
  async deleteCompetitionSchedule(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'id', type: () => String }) id: string,
  ) {
    const command = new DeleteCompetitionScheduleCommand({ id }, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Query((returns) => [CompetitionSchedule])
  async competitionSchedules() {
    return this.queryBus.execute(new GetCompetitionSchedulesQuery());
  }

  @Query((returns) => CompetitionSchedule)
  async competitionSchedule(@Args('id', { type: () => GraphQLString }) id: string) {
    return this.queryBus.execute(new GetCompetitionScheduleQuery(id));
  }

  @ResolveField('competition', (returns) => Competition)
  async getCompetition(@Parent() competitionSchedule: CompetitionSchedule) {
    return this.queryBus.execute(new GetCompetitionQuery(competitionSchedule.competition_id));
  }
}
