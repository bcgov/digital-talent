import { Field, InputType } from '@nestjs/graphql';
import { OpportunityUpdateOneRequiredWithoutOffersNestedInput } from '../opportunity/opportunity-update-one-required-without-offers-nested.input';

@InputType()
export class ElistOfferUpdateWithoutElistInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Boolean, { nullable: true })
  is_accepted?: boolean;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => OpportunityUpdateOneRequiredWithoutOffersNestedInput, { nullable: true })
  opportunity?: OpportunityUpdateOneRequiredWithoutOffersNestedInput;
}
