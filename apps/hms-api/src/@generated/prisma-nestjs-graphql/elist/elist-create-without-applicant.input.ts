import { Field, InputType, Int } from '@nestjs/graphql';
import { CompetitionCreateNestedOneWithoutElistInput } from '../competition/competition-create-nested-one-without-elist.input';
import { ElistOfferCreateNestedManyWithoutElistInput } from '../elist-offer/elist-offer-create-nested-many-without-elist.input';

@InputType()
export class ElistCreateWithoutApplicantInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => Int, { nullable: false })
  rank!: number;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => CompetitionCreateNestedOneWithoutElistInput, { nullable: false })
  competition!: CompetitionCreateNestedOneWithoutElistInput;

  @Field(() => ElistOfferCreateNestedManyWithoutElistInput, { nullable: true })
  offers?: ElistOfferCreateNestedManyWithoutElistInput;
}
