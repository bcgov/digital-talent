import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class CompetitionSkillCountAggregate {
  @Field(() => Int, { nullable: false })
  competition_id!: number;

  @Field(() => Int, { nullable: false })
  skill_id!: number;

  @Field(() => Int, { nullable: false })
  min_years_experience!: number;

  @Field(() => Int, { nullable: false })
  is_required!: number;

  @Field(() => Int, { nullable: false })
  created_at!: number;

  @Field(() => Int, { nullable: false })
  updated_at!: number;

  @Field(() => Int, { nullable: false })
  deleted_at!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
