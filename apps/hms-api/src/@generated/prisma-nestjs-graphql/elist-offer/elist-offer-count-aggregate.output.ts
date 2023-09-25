import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class ElistOfferCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  elistId!: number;

  @Field(() => Int, { nullable: false })
  is_accepted!: number;

  @Field(() => Int, { nullable: false })
  created_at!: number;

  @Field(() => Int, { nullable: false })
  updated_at!: number;

  @Field(() => Int, { nullable: false })
  deleted_at!: number;

  @Field(() => Int, { nullable: false })
  opportunityId!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
