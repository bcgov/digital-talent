import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import {
  Application,
  ApplicationLocation,
  FindManyApplicationLocationArgs,
  Location,
} from '../../../../@generated/prisma-nestjs-graphql';
import { CurrentUser } from '../../../auth/decorators/current-user.decorator';
import { GetLocationQuery } from '../../../location/queries/get-location/get-location.query';
import { GetApplicationQuery } from '../../application/queries/get-application/get-application.query';
import { CreateApplicationLocationCommand } from '../commands/create-application-location/create-application-location.command';
import { DeleteApplicationLocationCommand } from '../commands/delete-application-location/delete-application-location.command';
import { UpdateApplicationLocationCommand } from '../commands/update-application-location/update-application-location.command';
import { CreateApplicationLocationInput } from '../inputs/create-application-location.input';
import { UpdateApplicationLocationInput } from '../inputs/update-application-location.input';
import { GetApplicationLocationQuery } from '../queries/get-application-location/get-application-location.query';
import { GetApplicationLocationsQuery } from '../queries/get-application-locations/get-application-locations.query';

@Resolver((of) => ApplicationLocation)
export class ApplicationLocationResolver {
  constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

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

  @Query((returns) => [ApplicationLocation])
  async applicationLocations(@Args() args?: FindManyApplicationLocationArgs) {
    return this.queryBus.execute(new GetApplicationLocationsQuery(args));
  }

  @Query((returns) => ApplicationLocation)
  async applicationLocation(
    @Args({ name: 'application_id', type: () => String }) application_id: string,
    @Args({ name: 'location_id', type: () => String }) location_id: string,
  ) {
    return this.queryBus.execute(new GetApplicationLocationQuery(application_id, location_id));
  }

  @ResolveField('application', (returns) => Application)
  async application(@Parent() applicationLocation: ApplicationLocation) {
    return this.queryBus.execute(new GetApplicationQuery(applicationLocation.application_id));
  }

  @ResolveField('location', (returns) => Location)
  async location(@Parent() applicationLocation: ApplicationLocation) {
    return this.queryBus.execute(new GetLocationQuery(applicationLocation.location_id));
  }
}
