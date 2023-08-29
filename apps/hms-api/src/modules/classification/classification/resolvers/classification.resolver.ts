import { QueryBus } from '@nestjs/cqrs';
import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GridModel } from '../../grid/models/grid.model';
import { GetGridQuery } from '../../grid/queries/get-grid/get-grid.query';
import { PositionModel } from '../../position/models/position.model';
import { GetPositionQuery } from '../../position/queries/get-position/get-position.query';
import { ClassificationModel } from '../models/classification.model';
import { GetClassificationsQuery } from '../queries/get-classifications/get-classifications.query';

@Resolver((of) => ClassificationModel)
export class ClassificationResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query((returns) => [ClassificationModel], { name: 'classifications' })
  getClassifications() {
    return this.queryBus.execute(new GetClassificationsQuery());
  }

  @ResolveField('grid', (returns) => GridModel)
  async getGrid(@Parent() classification: ClassificationModel) {
    return this.queryBus.execute(new GetGridQuery(classification.grid_id));
  }

  @ResolveField('position', (returns) => PositionModel)
  async getPosition(@Parent() classification: ClassificationModel) {
    return this.queryBus.execute(new GetPositionQuery(classification.position_id));
  }
}
