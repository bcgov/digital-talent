import { QueryBus } from '@nestjs/cqrs';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { GridModel } from '../../grid/models/grid.model';
import { GetGridQuery } from '../../grid/queries/get-grid/get-grid.query';
import { OccupationGroupModel } from '../../occupation-group/models/occupation-group.model';
import { GetOccupationGroupQuery } from '../../occupation-group/queries/get-occupation-group/get-occupation-group.query';
import { ClassificationModel } from '../models/classification.model';
import { GetClassificationQuery } from '../queries/get-classification/get-classification.query';
import { GetClassificationsQuery } from '../queries/get-classifications/get-classifications.query';

@Resolver((of) => ClassificationModel)
export class ClassificationResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query((returns) => [ClassificationModel], { name: 'classifications' })
  getClassifications() {
    return this.queryBus.execute(new GetClassificationsQuery());
  }

  @Query((returns) => ClassificationModel, { name: 'classification' })
  getClassification(@Args({ name: 'id', type: () => GraphQLUUID }) id: string) {
    return this.queryBus.execute(new GetClassificationQuery(id));
  }

  @ResolveField('grid', (returns) => GridModel)
  getGrid(@Parent() classification: ClassificationModel) {
    return this.queryBus.execute(new GetGridQuery(classification.grid_id));
  }

  @ResolveField('occupation_group', (returns) => OccupationGroupModel)
  async getOccupationGroup(@Parent() classification: ClassificationModel) {
    return this.queryBus.execute(new GetOccupationGroupQuery(classification.occupation_group_id));
  }
}
