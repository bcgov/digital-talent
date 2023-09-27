import { QueryBus } from '@nestjs/cqrs';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { FindManyMinistryArgs, Ministry, Opportunity } from '../../../@generated/prisma-nestjs-graphql';
import { GetOpportunitiesQuery } from '../../opportunity/opportunity/queries/get-opportunities/get-opportunities.query';
import { GetMinistriesQuery } from '../queries/get-ministries/get-ministries.query';
import { GetMinistryQuery } from '../queries/get-ministry/get-ministry.query';

@Resolver((of) => Ministry)
export class MinistryResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query((returns) => [Ministry], { name: 'ministries' })
  getMinistries(@Args() args?: FindManyMinistryArgs) {
    return this.queryBus.execute(new GetMinistriesQuery(args));
  }

  @Query((returns) => Ministry, { name: 'ministry' })
  getMinistry(@Args({ name: 'id', type: () => GraphQLUUID }) id: string) {
    return this.queryBus.execute(new GetMinistryQuery(id));
  }

  @ResolveField('opportunities', (returns) => [Opportunity])
  getOpportunities(@Parent() ministry: Ministry) {
    return this.queryBus.execute(new GetOpportunitiesQuery({ where: { ministry_id: { equals: ministry.id } } }));
  }
}
