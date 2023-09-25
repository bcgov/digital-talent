import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ElistOfferUncheckedCreateWithoutElistInput {
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

  @Field(() => String, { nullable: true })
  opportunityId?: string;
}
