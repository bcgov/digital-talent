import { CommandBus } from '@nestjs/cqrs';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { CreateGridCommand } from './commands/create-grid/create-grid.command';
import { GridEntity } from './entities/grid.entity';
import { CreateGridInput } from './inputs/grid.input';

@Resolver((of) => GridEntity)
export class GridResolver {
  constructor(private readonly commandBus: CommandBus) {}

  @Mutation((returns) => GraphQLString)
  async createGrid(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'data', type: () => CreateGridInput }) data: CreateGridInput,
  ) {
    const command = new CreateGridCommand(data, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }
}
