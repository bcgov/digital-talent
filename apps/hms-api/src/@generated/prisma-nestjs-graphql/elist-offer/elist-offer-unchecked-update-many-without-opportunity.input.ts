import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ElistOfferUncheckedUpdateManyWithoutOpportunityInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  elist_id?: string;

  @Field(() => Boolean, { nullable: true })
  is_accepted?: boolean;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;
}
