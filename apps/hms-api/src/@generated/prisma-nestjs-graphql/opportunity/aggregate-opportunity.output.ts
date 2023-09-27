import { Field, ObjectType } from '@nestjs/graphql';
import { OpportunityCountAggregate } from './opportunity-count-aggregate.output';
import { OpportunityMinAggregate } from './opportunity-min-aggregate.output';
import { OpportunityMaxAggregate } from './opportunity-max-aggregate.output';

@ObjectType()
export class AggregateOpportunity {
  @Field(() => OpportunityCountAggregate, { nullable: true })
  _count?: OpportunityCountAggregate;

  @Field(() => OpportunityMinAggregate, { nullable: true })
  _min?: OpportunityMinAggregate;

  @Field(() => OpportunityMaxAggregate, { nullable: true })
  _max?: OpportunityMaxAggregate;
}
