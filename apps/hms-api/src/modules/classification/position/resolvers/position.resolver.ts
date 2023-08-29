import { QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { PositionModel } from '../models/position.model';
import { GetPositionQuery } from '../queries/get-position/get-position.query';
import { GetPositionsQuery } from '../queries/get-positions/get-positions.query';

@Resolver((of) => PositionModel)
export class PositionResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query((returns) => [PositionModel], { name: 'positions' })
  async getPositions() {
    return this.queryBus.execute(new GetPositionsQuery());
  }

  @Query((returns) => PositionModel, { name: 'position' })
  async getPosition(@Args('id', { type: () => GraphQLUUID }) id: string) {
    return this.queryBus.execute(new GetPositionQuery(id));
  }
}
