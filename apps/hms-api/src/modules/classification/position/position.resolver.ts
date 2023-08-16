import { CommandBus } from '@nestjs/cqrs';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import { CreatePositionCommand } from './commands/create-position/create-position.command';
import { PositionEntity } from './entities/position.entity';
import { CreatePositionInput } from './inputs/create-position.input';
import { UpdatePositionInput } from './inputs/update-position.input';
import { PrismaService } from '../../prisma/prisma.service';
import { DeletePositionCommand } from './commands/delete-position/delete-position.command';
import { UpdatePositionCommand } from './commands/update-position/update-position.command';

@Resolver((of) => PositionEntity)
export class PositionResolver {
  constructor(private readonly commandBus: CommandBus, private readonly prisma: PrismaService) {}

  @Mutation((returns) => GraphQLString)
  async createPosition(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'data', type: () => CreatePositionInput }) data: CreatePositionInput,
  ) {
    const { id, ...restData } = data;
    const command = new CreatePositionCommand({ id, ...restData }, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Mutation((returns) => GraphQLString)
  async updatePosition(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'data', type: () => UpdatePositionInput }) data: UpdatePositionInput,
  ) {
    const command = new UpdatePositionCommand(data, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Mutation((returns) => GraphQLString)
  async deletePosition(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'id', type: () => String }) id: string,
  ) {
    const command = new DeletePositionCommand({ id }, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Query((returns) => [PositionEntity])
  async positions() {
    return this.prisma.position.findMany();
  }

  @Query((returns) => PositionEntity)
  async position(@Args('id', { type: () => GraphQLString }) id: string) {
    return this.prisma.position.findUnique({
      where: { id },
    });
  }
}
