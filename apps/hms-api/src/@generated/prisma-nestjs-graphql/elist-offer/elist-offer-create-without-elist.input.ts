import { Field, InputType } from '@nestjs/graphql';
import { OpportunityCreateNestedOneWithoutOffersInput } from '../opportunity/opportunity-create-nested-one-without-offers.input';

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

  @Field(() => OpportunityCreateNestedOneWithoutOffersInput, { nullable: true })
  opportunity?: OpportunityCreateNestedOneWithoutOffersInput;
}
