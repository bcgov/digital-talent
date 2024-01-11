import { QueryBus } from '@nestjs/cqrs';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { Classification, OccupationGroup } from '../../../@generated/prisma-nestjs-graphql';
import { GetClassificationsQuery } from '../../classification/queries/get-classifications/get-classifications.query';
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

  @ResolveField('classifications', (returns) => [Classification])
  async classifications(@Parent() occupationGroup: OccupationGroup) {
    return this.queryBus.execute(
      new GetClassificationsQuery({ where: { occupation_group_id: { equals: occupationGroup.id } } }),
    );
  }
}
