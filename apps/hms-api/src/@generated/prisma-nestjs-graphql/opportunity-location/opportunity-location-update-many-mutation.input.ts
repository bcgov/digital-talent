import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class OpportunityLocationUpdateManyMutationInput {
  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;
}
