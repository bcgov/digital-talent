import { QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { FindManyLocationArgs, Location } from '../../../@generated/prisma-nestjs-graphql';
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
}
