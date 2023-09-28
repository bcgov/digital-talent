import { Field, InputType } from '@nestjs/graphql';
import { ElistUpdateOneRequiredWithoutOffersNestedInput } from '../elist/elist-update-one-required-without-offers-nested.input';
import { OpportunityUpdateOneRequiredWithoutOffersNestedInput } from '../opportunity/opportunity-update-one-required-without-offers-nested.input';

@InputType()
export class ElistOfferUpdateInput {
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

  @Field(() => ElistUpdateOneRequiredWithoutOffersNestedInput, { nullable: true })
  elist?: ElistUpdateOneRequiredWithoutOffersNestedInput;

  @Field(() => OpportunityUpdateOneRequiredWithoutOffersNestedInput, { nullable: true })
  opportunity?: OpportunityUpdateOneRequiredWithoutOffersNestedInput;
}
