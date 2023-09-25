import { Field, InputType } from '@nestjs/graphql';
import { OpportunityUpdateOneWithoutElistOfferNestedInput } from '../opportunity/opportunity-update-one-without-elist-offer-nested.input';

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

  @Field(() => OpportunityUpdateOneWithoutElistOfferNestedInput, { nullable: true })
  Opportunity?: OpportunityUpdateOneWithoutElistOfferNestedInput;
}
