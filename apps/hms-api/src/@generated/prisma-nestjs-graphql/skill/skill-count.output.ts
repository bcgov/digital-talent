import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class SkillCount {
  @Field(() => Int, { nullable: false })
  applications?: number;

  @Field(() => Int, { nullable: false })
  competitions?: number;

  @Field(() => Int, { nullable: false })
  OpportunitySkill?: number;
}
