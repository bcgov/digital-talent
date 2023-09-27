import { Field, ObjectType, Float } from '@nestjs/graphql';

@ObjectType()
export class CompetitionSkillAvgAggregate {
  @Field(() => Float, { nullable: true })
  min_years_experience?: number;
}
