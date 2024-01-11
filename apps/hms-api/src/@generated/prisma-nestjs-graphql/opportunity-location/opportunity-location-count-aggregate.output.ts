import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class OpportunityLocationCountAggregate {
  @Field(() => Int, { nullable: false })
  location_id!: number;

  @Field(() => Int, { nullable: false })
  opportunity_id!: number;

  @Field(() => Int, { nullable: false })
  created_at!: number;

  @Field(() => Int, { nullable: false })
  deleted_at!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
