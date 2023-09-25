import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class CompetitionCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  deltek_id!: number;

  @Field(() => Int, { nullable: false })
  job_description_id!: number;

  @Field(() => Int, { nullable: false })
  recruiter_id!: number;

  @Field(() => Int, { nullable: false })
  category!: number;

  @Field(() => Int, { nullable: false })
  state!: number;

  @Field(() => Int, { nullable: false })
  metadata!: number;

  @Field(() => Int, { nullable: false })
  created_at!: number;

  @Field(() => Int, { nullable: false })
  updated_at!: number;

  @Field(() => Int, { nullable: false })
  deleted_at!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
