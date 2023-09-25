import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class ApplicationSkillMinAggregate {
  @Field(() => String, { nullable: true })
  application_id?: string;

  @Field(() => String, { nullable: true })
  skill_id?: string;

  @Field(() => Int, { nullable: true })
  years_experience?: number;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;
}
