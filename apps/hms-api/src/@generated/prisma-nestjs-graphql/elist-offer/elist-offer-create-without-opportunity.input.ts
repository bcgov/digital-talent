import { Field, InputType } from '@nestjs/graphql';
import { ElistCreateNestedOneWithoutElistOfferInput } from '../elist/elist-create-nested-one-without-elist-offer.input';

@InputType()
export class ElistOfferCreateWithoutOpportunityInput {
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

  @Field(() => ElistCreateNestedOneWithoutElistOfferInput, { nullable: false })
  elist!: ElistCreateNestedOneWithoutElistOfferInput;
}
