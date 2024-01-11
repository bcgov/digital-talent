import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class ApplicationSkillCountAggregate {
  @Field(() => Int, { nullable: false })
  application_id!: number;

  @Field(() => Int, { nullable: false })
  skill_id!: number;

  @Field(() => Int, { nullable: false })
  years_experience!: number;

  @Field(() => Int, { nullable: false })
  description!: number;

  @Field(() => Int, { nullable: false })
  created_at!: number;

  @Field(() => Int, { nullable: false })
  updated_at!: number;

  @Field(() => Int, { nullable: false })
  deleted_at!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
