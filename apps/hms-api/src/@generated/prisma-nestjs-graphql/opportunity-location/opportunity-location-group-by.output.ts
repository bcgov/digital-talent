import { Field, ObjectType } from '@nestjs/graphql';
import { OpportunityLocationCountAggregate } from './opportunity-location-count-aggregate.output';
import { OpportunityLocationMinAggregate } from './opportunity-location-min-aggregate.output';
import { OpportunityLocationMaxAggregate } from './opportunity-location-max-aggregate.output';

@ObjectType()
export class OpportunityLocationGroupBy {
  @Field(() => String, { nullable: false })
  location_id!: string;

  @Field(() => String, { nullable: false })
  opportunity_id!: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => OpportunityLocationCountAggregate, { nullable: true })
  _count?: OpportunityLocationCountAggregate;

  @Field(() => OpportunityLocationMinAggregate, { nullable: true })
  _min?: OpportunityLocationMinAggregate;

  @Field(() => OpportunityLocationMaxAggregate, { nullable: true })
  _max?: OpportunityLocationMaxAggregate;
}
