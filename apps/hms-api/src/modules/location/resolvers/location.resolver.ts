import { QueryBus } from '@nestjs/cqrs';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { Application, FindManyLocationArgs, Location, Opportunity } from '../../../@generated/prisma-nestjs-graphql';
import { GetApplicationsQuery } from '../../application/application/queries/get-applications/get-applications.query';
import { GetOpportunitiesQuery } from '../../opportunity/opportunity/queries/get-opportunities/get-opportunities.query';
import { PrismaService } from '../../prisma/prisma.service';
import { GetLocationQuery } from '../queries/get-location/get-location.query';
import { GetLocationsQuery } from '../queries/get-locations/get-locations.query';

@Resolver((of) => Location)
export class LocationResolver {
  constructor(private readonly queryBus: QueryBus, private readonly prisma: PrismaService) {}

  @Query((returns) => [Location], { name: 'locations' })
  getLocations(@Args() args?: FindManyLocationArgs) {
    return this.queryBus.execute(new GetLocationsQuery(args));
  }

  @Query((returns) => Location, { name: 'location' })
  getLocation(@Args({ name: 'id', type: () => GraphQLUUID }) id: string) {
    return this.queryBus.execute(new GetLocationQuery(id));
  }

  @ResolveField('applications', (returns) => [Application])
  async applications(@Parent() location: Location) {
    return this.queryBus.execute(
      new GetApplicationsQuery({ where: { locations: { some: { location_id: { equals: location.id } } } } }),
    );
  }

  @ResolveField('opportunities', (returns) => [Opportunity])
  async opportunities(@Parent() location: Location) {
    return this.queryBus.execute(
      new GetOpportunitiesQuery({ where: { locations: { some: { location_id: { equals: location.id } } } } }),
    );
  }
}
