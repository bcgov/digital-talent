import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class OpportunityLocationCreateManyOpportunityInput {
  @Field(() => String, { nullable: false })
  location_id!: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;
}
