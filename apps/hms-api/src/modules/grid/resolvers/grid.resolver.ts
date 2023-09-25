import { QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { Grid } from '../../../@generated/prisma-nestjs-graphql';
import { GetGridQuery } from '../queries/get-grid/get-grid.query';
import { GetGridsQuery } from '../queries/get-grids/get-grids.query';

@Resolver((of) => Grid)
export class GridResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query((returns) => [Grid], { name: 'grids' })
  getGrids() {
    return this.queryBus.execute(new GetGridsQuery());
  }

  @Query((returns) => Grid, { name: 'grid' })
  getGrid(@Args({ name: 'id', type: () => GraphQLUUID }) id: string) {
    return this.queryBus.execute(new GetGridQuery(id));
  }
}
