import { Field, ObjectType } from '@nestjs/graphql';
import { OpportunityLocationCountAggregate } from './opportunity-location-count-aggregate.output';
import { OpportunityLocationMinAggregate } from './opportunity-location-min-aggregate.output';
import { OpportunityLocationMaxAggregate } from './opportunity-location-max-aggregate.output';

@ObjectType()
export class AggregateOpportunityLocation {
  @Field(() => OpportunityLocationCountAggregate, { nullable: true })
  _count?: OpportunityLocationCountAggregate;

  @Field(() => OpportunityLocationMinAggregate, { nullable: true })
  _min?: OpportunityLocationMinAggregate;

  @Field(() => OpportunityLocationMaxAggregate, { nullable: true })
  _max?: OpportunityLocationMaxAggregate;
}
