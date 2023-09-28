import { Field, InputType } from '@nestjs/graphql';
import { ElistCreateNestedOneWithoutOffersInput } from '../elist/elist-create-nested-one-without-offers.input';
import { OpportunityCreateNestedOneWithoutOffersInput } from '../opportunity/opportunity-create-nested-one-without-offers.input';

@InputType()
export class ElistOfferCreateInput {
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

  @Field(() => ElistCreateNestedOneWithoutOffersInput, { nullable: false })
  elist!: ElistCreateNestedOneWithoutOffersInput;

  @Field(() => OpportunityCreateNestedOneWithoutOffersInput, { nullable: false })
  opportunity!: OpportunityCreateNestedOneWithoutOffersInput;
}
