import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ElistOfferMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  elistId?: true;

  @Field(() => Boolean, { nullable: true })
  is_accepted?: true;

  @Field(() => Boolean, { nullable: true })
  created_at?: true;

  @Field(() => Boolean, { nullable: true })
  updated_at?: true;

  @Field(() => Boolean, { nullable: true })
  deleted_at?: true;

  @Field(() => Boolean, { nullable: true })
  opportunityId?: true;
}
