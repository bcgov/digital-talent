import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class ApplicationSkillSumAggregate {
  @Field(() => Int, { nullable: true })
  years_experience?: number;
}
