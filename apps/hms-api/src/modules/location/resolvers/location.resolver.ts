import { QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { PrismaService } from '../../prisma/prisma.service';
import { LocationModel } from '../models/location.model';
import { GetLocationQuery } from '../queries/get-location/get-location.query';
import { GetLocationsQuery } from '../queries/get-locations/get-locations.query';

@Resolver((of) => LocationModel)
export class LocationResolver {
  constructor(private readonly queryBus: QueryBus, private readonly prisma: PrismaService) {}

  @Query((returns) => [LocationModel], { name: 'locations' })
  getLocations() {
    return this.queryBus.execute(new GetLocationsQuery());
  }

  @Query((returns) => LocationModel, { name: 'location' })
  getLocation(@Args({ name: 'id', type: () => GraphQLUUID }) id: string) {
    return this.queryBus.execute(new GetLocationQuery(id));
  }
}
