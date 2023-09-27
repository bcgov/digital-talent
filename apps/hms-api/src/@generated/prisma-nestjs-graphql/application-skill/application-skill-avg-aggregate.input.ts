import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ApplicationSkillAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  years_experience?: true;
}
