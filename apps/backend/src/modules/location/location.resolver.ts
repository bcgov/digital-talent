import { CommandBus } from '@nestjs/cqrs';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { CreateLocationCommand } from './commands/create-location/create-location.command';
import { UpdateLocationCommand } from './commands/update-location/update-location.command';
import { LocationEntity } from './entities/location.entity';
import { CreateLocationInput } from './inputs/create-location.input';
import { UpdateLocationInput } from './inputs/update-location.input';
import { PrismaService } from '../prisma/prisma.service';
import { DeleteLocationCommand } from './commands/delete-location/delete-location.command';

@Resolver((of) => LocationEntity)
export class LocationResolver {
  constructor(private readonly commandBus: CommandBus, private readonly prisma: PrismaService) {}

  @Mutation((returns) => GraphQLString)
  async createLocation(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'data', type: () => CreateLocationInput }) data: CreateLocationInput,
  ) {
    const { id, ...restData } = data;
    const command = new CreateLocationCommand({ id, ...restData }, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Mutation((returns) => GraphQLString)
  async updateLocation(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'data', type: () => UpdateLocationInput }) data: UpdateLocationInput,
  ) {
    const command = new UpdateLocationCommand(data, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Mutation((returns) => GraphQLString)
  async deleteLocation(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'id', type: () => String }) id: string,
  ) {
    const command = new DeleteLocationCommand({ id }, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Query((returns) => [LocationEntity])
  async locations() {
    return this.prisma.location.findMany();
  }

  @Query((returns) => LocationEntity)
  async location(@Args('id', { type: () => GraphQLString }) id: string) {
    return this.prisma.location.findUnique({
      where: { id },
    });
  }
}
