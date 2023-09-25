import { Field, InputType, Int } from '@nestjs/graphql';
import { CompetitionUpdateOneRequiredWithoutElistNestedInput } from '../competition/competition-update-one-required-without-elist-nested.input';
import { ElistOfferUpdateManyWithoutElistNestedInput } from '../elist-offer/elist-offer-update-many-without-elist-nested.input';

@InputType()
export class ElistUpdateWithoutApplicantInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Int, { nullable: true })
  rank?: number;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => CompetitionUpdateOneRequiredWithoutElistNestedInput, { nullable: true })
  competition?: CompetitionUpdateOneRequiredWithoutElistNestedInput;

  @Field(() => ElistOfferUpdateManyWithoutElistNestedInput, { nullable: true })
  ElistOffer?: ElistOfferUpdateManyWithoutElistNestedInput;
}
