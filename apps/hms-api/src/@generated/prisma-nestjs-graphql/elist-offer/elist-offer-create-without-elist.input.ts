import { Field, InputType } from '@nestjs/graphql';
import { OpportunityCreateNestedOneWithoutElistOfferInput } from '../opportunity/opportunity-create-nested-one-without-elist-offer.input';

@InputType()
export class ElistOfferCreateWithoutElistInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => Boolean, { nullable: false })
  is_accepted!: boolean;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => OpportunityCreateNestedOneWithoutElistOfferInput, { nullable: true })
  Opportunity?: OpportunityCreateNestedOneWithoutElistOfferInput;
}
