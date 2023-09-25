import { Field, InputType, Int } from '@nestjs/graphql';
import { ElistOfferUncheckedUpdateManyWithoutElistNestedInput } from '../elist-offer/elist-offer-unchecked-update-many-without-elist-nested.input';

@InputType()
export class ElistUncheckedUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  applicant_id?: string;

  @Field(() => String, { nullable: true })
  competition_id?: string;

  @Field(() => Int, { nullable: true })
  rank?: number;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => ElistOfferUncheckedUpdateManyWithoutElistNestedInput, { nullable: true })
  ElistOffer?: ElistOfferUncheckedUpdateManyWithoutElistNestedInput;
}
