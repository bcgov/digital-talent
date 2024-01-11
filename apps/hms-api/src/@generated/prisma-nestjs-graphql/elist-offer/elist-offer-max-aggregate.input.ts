import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ElistOfferMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  elist_id?: true;

  @Field(() => Boolean, { nullable: true })
  opportunity_id?: true;

  @Field(() => Boolean, { nullable: true })
  is_accepted?: true;

  @Field(() => Boolean, { nullable: true })
  created_at?: true;

  @Field(() => Boolean, { nullable: true })
  updated_at?: true;

  @Field(() => Boolean, { nullable: true })
  deleted_at?: true;
}
