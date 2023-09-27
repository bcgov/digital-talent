import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class OpportunityCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  competition_id!: number;

  @Field(() => Int, { nullable: false })
  deltek_id!: number;

  @Field(() => Int, { nullable: false })
  hiring_manager_id!: number;

  @Field(() => Int, { nullable: false })
  ministry_id!: number;

  @Field(() => Int, { nullable: false })
  state!: number;

  @Field(() => Int, { nullable: false })
  involvement!: number;

  @Field(() => Int, { nullable: false })
  work_option!: number;

  @Field(() => Int, { nullable: false })
  description!: number;

  @Field(() => Int, { nullable: false })
  candidate_description!: number;

  @Field(() => Int, { nullable: false })
  team_name!: number;

  @Field(() => Int, { nullable: false })
  team_description!: number;

  @Field(() => Int, { nullable: false })
  work_examples!: number;

  @Field(() => Int, { nullable: false })
  created_at!: number;

  @Field(() => Int, { nullable: false })
  updated_at!: number;

  @Field(() => Int, { nullable: false })
  deleted_at!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
