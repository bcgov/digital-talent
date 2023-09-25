import { QueryBus } from '@nestjs/cqrs';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { Classification, Grid, OccupationGroup } from '../../../@generated/prisma-nestjs-graphql';
import { GetGridQuery } from '../../grid/queries/get-grid/get-grid.query';
import { GetOccupationGroupQuery } from '../../occupation-group/queries/get-occupation-group/get-occupation-group.query';
import { GetClassificationQuery } from '../queries/get-classification/get-classification.query';
import { GetClassificationsQuery } from '../queries/get-classifications/get-classifications.query';

@Resolver((of) => Classification)
export class ClassificationResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query((returns) => [Classification], { name: 'classifications' })
  getClassifications() {
    return this.queryBus.execute(new GetClassificationsQuery());
  }

  @Query((returns) => Classification, { name: 'classification' })
  getClassification(@Args({ name: 'id', type: () => GraphQLUUID }) id: string) {
    return this.queryBus.execute(new GetClassificationQuery(id));
  }

  @ResolveField('grid', (returns) => Grid)
  getGrid(@Parent() classification: Classification) {
    return this.queryBus.execute(new GetGridQuery(classification.grid_id));
  }

  @ResolveField('occupation_group', (returns) => OccupationGroup)
  async getOccupationGroup(@Parent() classification: Classification) {
    return this.queryBus.execute(new GetOccupationGroupQuery(classification.occupation_group_id));
  }
}
