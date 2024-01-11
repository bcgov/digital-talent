import { Field, InputType, Int } from '@nestjs/graphql';
import { ElistOfferUncheckedCreateNestedManyWithoutElistInput } from '../elist-offer/elist-offer-unchecked-create-nested-many-without-elist.input';

@InputType()
export class ElistUncheckedCreateInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  applicant_id!: string;

  @Field(() => String, { nullable: false })
  competition_id!: string;

  @Field(() => Int, { nullable: false })
  rank!: number;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => ElistOfferUncheckedCreateNestedManyWithoutElistInput, { nullable: true })
  offers?: ElistOfferUncheckedCreateNestedManyWithoutElistInput;
}
