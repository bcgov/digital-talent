import { QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { OccupationGroup } from '../../../@generated/prisma-nestjs-graphql';
import { GetOccupationGroupQuery } from '../queries/get-occupation-group/get-occupation-group.query';
import { GetOccupationGroupsQuery } from '../queries/get-occupation-groups/get-occupation-groups.query';

@Resolver((of) => OccupationGroup)
export class OccupationGroupResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query((returns) => [OccupationGroup], { name: 'occupationGroups' })
  getOccupationGroups() {
    return this.queryBus.execute(new GetOccupationGroupsQuery());
  }

  @Query((returns) => OccupationGroup, { name: 'occupationGroup' })
  getOccupationGroup(@Args({ name: 'id', type: () => GraphQLUUID }) id: string) {
    return this.queryBus.execute(new GetOccupationGroupQuery(id));
  }
}
