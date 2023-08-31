import { QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { GridModel } from '../models/grid.model';
import { GetGridQuery } from '../queries/get-grid/get-grid.query';
import { GetGridsQuery } from '../queries/get-grids/get-grids.query';

@Resolver((of) => GridModel)
export class GridResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query((returns) => [GridModel], { name: 'grids' })
  getGrids() {
    return this.queryBus.execute(new GetGridsQuery());
  }

  @Query((returns) => GridModel, { name: 'grid' })
  getGrid(@Args({ name: 'id', type: () => GraphQLUUID }) id: string) {
    return this.queryBus.execute(new GetGridQuery(id));
  }
}
