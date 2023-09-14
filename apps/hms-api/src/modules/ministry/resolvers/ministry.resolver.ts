import { QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { MinistryModel } from '../models/ministry.model';
import { GetMinistriesQuery } from '../queries/get-ministries/get-ministries.query';
import { GetMinistryQuery } from '../queries/get-ministry/get-ministry.query';

@Resolver((of) => MinistryModel)
export class MinistryResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query((returns) => [MinistryModel], { name: 'ministries' })
  getMinistries() {
    return this.queryBus.execute(new GetMinistriesQuery());
  }

  @Query((returns) => MinistryModel, { name: 'ministry' })
  getMinistry(@Args({ name: 'id', type: () => GraphQLUUID }) id: string) {
    return this.queryBus.execute(new GetMinistryQuery(id));
  }
}
