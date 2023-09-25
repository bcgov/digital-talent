import { Field, InputType } from '@nestjs/graphql';
import { ElistUpdateOneRequiredWithoutElistOfferNestedInput } from '../elist/elist-update-one-required-without-elist-offer-nested.input';

@InputType()
export class ElistOfferUpdateWithoutOpportunityInput {
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

  @Field(() => ElistUpdateOneRequiredWithoutElistOfferNestedInput, { nullable: true })
  elist?: ElistUpdateOneRequiredWithoutElistOfferNestedInput;
}
