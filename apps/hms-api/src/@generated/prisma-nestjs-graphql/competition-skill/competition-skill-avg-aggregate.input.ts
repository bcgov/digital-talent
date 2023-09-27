import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CompetitionSkillAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  min_years_experience?: true;
}
