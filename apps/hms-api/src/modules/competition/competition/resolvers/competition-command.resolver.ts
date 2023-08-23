import { CommandBus } from '@nestjs/cqrs';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { CurrentUser } from '../../../auth/decorators/current-user.decorator';
import { CreateCompetitionCommand } from '../commands/create-competition/create-competition.command';
import { DeleteCompetitionCommand } from '../commands/delete-competition/delete-competition.command';
import { UpdateCompetitionStateCommand } from '../commands/update-competition-state/update-competition-state.command';
import { UpdateCompetitionCommand } from '../commands/update-competition/update-competition.command';
import { CreateCompetitionInput } from '../inputs/create-competition.input';
import { DeleteCompetitionInput } from '../inputs/delete-competition.input';
import { UpdateCompetitionStateInput } from '../inputs/update-competition-state.input';
import { UpdateCompetitionInput } from '../inputs/update-competition.input';

@Resolver((of) => GraphQLString)
export class CompetitionCommandResolver {
  constructor(private readonly commandBus: CommandBus) {}

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
