import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { CurrentUser } from '../../../auth/decorators/current-user.decorator';
import { CreateCompetitionCommand } from '../commands/create-competition/create-competition.command';
import { DeleteCompetitionCommand } from '../commands/delete-competition/delete-competition.command';
import { UpdateCompetitionStateCommand } from '../commands/update-competition-state/update-competition-state.command';
import { UpdateCompetitionCommand } from '../commands/update-competition/update-competition.command';
import { CompetitionWriteEntity } from '../entities/competition-write.entity';
import { CreateCompetitionInput } from '../inputs/create-competition.input';
import { DeleteCompetitionInput } from '../inputs/delete-competition.input';
import { UpdateCompetitionStateInput } from '../inputs/update-competition-state.input';
import { UpdateCompetitionInput } from '../inputs/update-competition.input';
import { GetCompetitionQuery } from '../queries/get-competition/get-competition.query';
import { GetCompetitionsQuery } from '../queries/get-competitions/get-competitions.query';

@Resolver((of) => GraphQLString)
export class CompetitionCommandResolver {
  constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

  @Mutation((returns) => GraphQLString)
  async createCompetition(
    @CurrentUser() user: Express.User,
    @Args({ name: 'data', type: () => CreateCompetitionInput }) data: CreateCompetitionInput,
  ) {
    const { id, ...restData } = data;

    const command = new CreateCompetitionCommand({ id, recruiter_id: user.id, ...restData }, { created_by: user.id });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Query((returns) => [CompetitionWriteEntity])
  async competitions() {
    const result = await this.queryBus.execute(new GetCompetitionsQuery());
    return result;
  }

  @Query((returns) => CompetitionWriteEntity)
  async competition(@Args('id', { type: () => String }) id: string) {
    const result = await this.queryBus.execute(new GetCompetitionQuery(id));
    return result;
  }

  @Mutation((returns) => GraphQLString)
  async updateCompetition(
    @CurrentUser() user: Express.User,
    @Args({ name: 'data', type: () => UpdateCompetitionInput }) data: UpdateCompetitionInput,
  ) {
    const { id, ...restData } = data;

    const command = new UpdateCompetitionCommand({ id, recruiter_id: user.id, ...restData }, { created_by: user.id });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Mutation((returns) => GraphQLString)
  async updateCompetitionState(
    @CurrentUser() user: Express.User,
    @Args({ name: 'data', type: () => UpdateCompetitionStateInput }) data: UpdateCompetitionStateInput,
  ) {
    const command = new UpdateCompetitionStateCommand(data, { created_by: user.id });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Mutation((returns) => GraphQLString)
  async deleteCompetition(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'data', type: () => DeleteCompetitionInput }) data: DeleteCompetitionInput,
  ) {
    const command = new DeleteCompetitionCommand(data, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }
}
