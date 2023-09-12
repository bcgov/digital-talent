import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { CurrentUser } from '../../../auth/decorators/current-user.decorator';
import { CompetitionScheduleModel } from '../../../competition-schedule/models/competition-schedule.model';
import { GetCompetitionSchedulesQuery } from '../../../competition-schedule/queries/get-competition-schedules/get-competition-schedules.query';
import { JobDescriptionModel } from '../../../job-description/models/job-description.model';
import { GetJobDescriptionQuery } from '../../../job-description/queries/get-job-description/get-job-description.query';
import { UserModel } from '../../../user/models/user.model';
import { GetUserQuery } from '../../../user/queries/get-user/get-user.query';
import { CreateCompetitionCommand } from '../commands/create-competition/create-competition.command';
import { DeleteCompetitionCommand } from '../commands/delete-competition/delete-competition.command';
import { UpdateCompetitionStateCommand } from '../commands/update-competition-state/update-competition-state.command';
import { UpdateCompetitionCommand } from '../commands/update-competition/update-competition.command';
import { CreateCompetitionInput } from '../inputs/create-competition.input';
import { DeleteCompetitionInput } from '../inputs/delete-competition.input';
import { UpdateCompetitionStateInput } from '../inputs/update-competition-state.input';
import { UpdateCompetitionInput } from '../inputs/update-competition.input';
import { CompetitionModel } from '../models/competition.model';
import { GetCompetitionQuery } from '../queries/get-competition/get-competition.query';
import { GetCompetitionsQuery } from '../queries/get-competitions/get-competitions.query';

@Resolver((of) => CompetitionModel)
export class CompetitionResolver {
  constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

  @Mutation((returns) => GraphQLUUID)
  async createCompetition(
    @CurrentUser() user: Express.User,
    @Args({ name: 'data', type: () => CreateCompetitionInput }) data: CreateCompetitionInput,
  ) {
    const { id, ...restData } = data;

    const command = new CreateCompetitionCommand({ id, recruiter_id: user.id, ...restData }, { created_by: user.id });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Query((returns) => [CompetitionModel])
  async competitions() {
    const result = await this.queryBus.execute(new GetCompetitionsQuery());
    return result;
  }

  @Query((returns) => CompetitionModel)
  async competition(@Args('id', { type: () => String }) id: string) {
    const result = await this.queryBus.execute(new GetCompetitionQuery(id));
    return result;
  }

  @Mutation((returns) => GraphQLUUID)
  async updateCompetition(
    @CurrentUser() user: Express.User,
    @Args({ name: 'data', type: () => UpdateCompetitionInput }) data: UpdateCompetitionInput,
  ) {
    const { id, ...restData } = data;

    const command = new UpdateCompetitionCommand({ id, recruiter_id: user.id, ...restData }, { created_by: user.id });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Mutation((returns) => GraphQLUUID)
  async updateCompetitionState(
    @CurrentUser() user: Express.User,
    @Args({ name: 'data', type: () => UpdateCompetitionStateInput }) data: UpdateCompetitionStateInput,
  ) {
    const command = new UpdateCompetitionStateCommand(data, { created_by: user.id });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Mutation((returns) => GraphQLUUID)
  async deleteCompetition(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'data', type: () => DeleteCompetitionInput }) data: DeleteCompetitionInput,
  ) {
    const command = new DeleteCompetitionCommand(data, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @ResolveField('job_description', (returns) => JobDescriptionModel)
  async getClassification(@Parent() competition: CompetitionModel) {
    return this.queryBus.execute(new GetJobDescriptionQuery(competition.job_description_id));
  }

  @ResolveField('recruiter', (returns) => UserModel)
  async getRecruiter(@Parent() competition: CompetitionModel) {
    return this.queryBus.execute(new GetUserQuery(competition.recruiter_id));
  }

  @ResolveField('schedule', (returns) => [CompetitionScheduleModel])
  async getSchedule(@Parent() competition: CompetitionModel) {
    return this.queryBus.execute(new GetCompetitionSchedulesQuery({ where: { competition_id: competition.id } }));
  }
}
