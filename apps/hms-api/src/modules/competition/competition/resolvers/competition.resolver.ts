import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import {
  Competition,
  CompetitionSchedule,
  CompetitionSkill,
  FindManyCompetitionArgs,
  JobDescription,
  User,
} from '../../../../@generated/prisma-nestjs-graphql';
import { CurrentUser } from '../../../auth/decorators/current-user.decorator';
import { GetCompetitionSchedulesQuery } from '../../../competition-schedule/queries/get-competition-schedules/get-competition-schedules.query';
import { GetJobDescriptionQuery } from '../../../job-description/queries/get-job-description/get-job-description.query';
import { GetUserQuery } from '../../../user/queries/get-user/get-user.query';
import { GetCompetitionSkillsQuery } from '../../competition-skill/queries/get-competition-skills/get-competition-skills.query';
import { CreateCompetitionCommand } from '../commands/create-competition/create-competition.command';
import { DeleteCompetitionCommand } from '../commands/delete-competition/delete-competition.command';
import { UpdateCompetitionStateCommand } from '../commands/update-competition-state/update-competition-state.command';
import { UpdateCompetitionCommand } from '../commands/update-competition/update-competition.command';
import { CreateCompetitionInput } from '../inputs/create-competition.input';
import { DeleteCompetitionInput } from '../inputs/delete-competition.input';
import { UpdateCompetitionStateInput } from '../inputs/update-competition-state.input';
import { UpdateCompetitionInput } from '../inputs/update-competition.input';
import { GetCompetitionQuery } from '../queries/get-competition/get-competition.query';
import { GetCompetitionsQuery } from '../queries/get-competitions/get-competitions.query';

@Resolver((of) => Competition)
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

  @Query((returns) => [Competition])
  async competitions(@Args() args?: FindManyCompetitionArgs) {
    const result = await this.queryBus.execute(new GetCompetitionsQuery(args));
    return result;
  }

  @Query((returns) => Competition)
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

  @ResolveField('job_description', (returns) => JobDescription)
  async jobDescription(@Parent() competition: Competition) {
    return this.queryBus.execute(new GetJobDescriptionQuery(competition.job_description_id));
  }

  @ResolveField('recruiter', (returns) => User)
  async recruiter(@Parent() competition: Competition) {
    return this.queryBus.execute(new GetUserQuery(competition.recruiter_id));
  }

  @ResolveField('schedule', (returns) => [CompetitionSchedule])
  async schedule(@Parent() competition: Competition) {
    return this.queryBus.execute(new GetCompetitionSchedulesQuery({ where: { competition_id: competition.id } }));
  }

  @ResolveField('skills', (returns) => [CompetitionSkill])
  async skills(@Parent() competition: Competition) {
    return this.queryBus.execute(new GetCompetitionSkillsQuery({ where: { competition_id: competition.id } }));
  }
}
