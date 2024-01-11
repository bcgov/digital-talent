import { Field, ObjectType, Float } from '@nestjs/graphql';

@ObjectType()
export class ApplicationSkillAvgAggregate {
  @Field(() => Float, { nullable: true })
  years_experience?: number;
}
