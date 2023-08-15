import { CommandBus } from '@nestjs/cqrs';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import { CreateApplicationLocationCommand } from './commands/create-application-location/create-application-location.command';
import { UpdateApplicationLocationCommand } from './commands/update-application-location/update-application-location.command';
import { ApplicationLocationEntity } from './entities/application-location.entity';
import { CreateApplicationLocationInput } from './inputs/create-application-location.input';
import { UpdateApplicationLocationInput } from './inputs/update-application-location.input';
import { PrismaService } from '../../prisma/prisma.service';
import { DeleteApplicationLocationCommand } from './commands/delete-application-location/delete-application-location.command';

@Resolver((of) => ApplicationLocationEntity)
export class ApplicationLocationResolver {
  constructor(private readonly commandBus: CommandBus, private readonly prisma: PrismaService) {}

  @Mutation((returns) => GraphQLString)
  async createApplicationLocation(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'data', type: () => CreateApplicationLocationInput }) data: CreateApplicationLocationInput,
  ) {
    const { application_id, location_id, ...restData } = data;
    const command = new CreateApplicationLocationCommand(
      { application_id, location_id, ...restData },
      { created_by: userId },
    );
    await this.commandBus.execute(command);

    return command.data.application_id;
  }

  @Mutation((returns) => GraphQLString)
  async updateApplicationLocation(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'data', type: () => UpdateApplicationLocationInput }) data: UpdateApplicationLocationInput,
  ) {
    const command = new UpdateApplicationLocationCommand(data, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.application_id;
  }

  @Mutation((returns) => GraphQLString)
  async deleteApplicationLocation(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'application_id', type: () => String }) application_id: string,
    @Args({ name: 'location_id', type: () => String }) location_id: string,
  ) {
    const command = new DeleteApplicationLocationCommand({ application_id, location_id }, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.application_id;
  }

  @Query((returns) => [ApplicationLocationEntity])
  async applicationLocations() {
    return this.prisma.applicationLocation.findMany();
  }

  @Query((returns) => ApplicationLocationEntity)
  async applicationLocation(
    @Args({ name: 'application_id', type: () => String }) application_id: string,
    @Args({ name: 'location_id', type: () => String }) location_id: string,
  ) {
    return this.prisma.applicationLocation.findUnique({
      where: {
        application_id_location_id: {
          application_id,
          location_id,
        },
      },
    });
  }
}
