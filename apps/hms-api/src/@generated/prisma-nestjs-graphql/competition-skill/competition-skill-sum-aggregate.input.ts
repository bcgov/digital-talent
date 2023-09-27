import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CompetitionSkillSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  min_years_experience?: true;
}
