import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class CompetitionSkillSumAggregate {
  @Field(() => Int, { nullable: true })
  min_years_experience?: number;
}
