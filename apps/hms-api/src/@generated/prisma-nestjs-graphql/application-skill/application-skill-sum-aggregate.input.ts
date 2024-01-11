import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ApplicationSkillSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  years_experience?: true;
}
