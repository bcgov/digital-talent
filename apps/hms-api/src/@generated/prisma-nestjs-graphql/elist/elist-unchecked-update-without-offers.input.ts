import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ElistUncheckedUpdateWithoutOffersInput {
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
}
