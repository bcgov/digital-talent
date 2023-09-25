import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class OpportunityLocationUncheckedUpdateManyWithoutOpportunityInput {
  @Field(() => String, { nullable: true })
  location_id?: string;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;
}
