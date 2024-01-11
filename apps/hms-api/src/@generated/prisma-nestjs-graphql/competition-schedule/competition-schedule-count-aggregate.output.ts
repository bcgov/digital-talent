import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class CompetitionScheduleCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  competition_id!: number;

  @Field(() => Int, { nullable: false })
  state!: number;

  @Field(() => Int, { nullable: false })
  start_at!: number;

  @Field(() => Int, { nullable: false })
  end_at!: number;

  @Field(() => Int, { nullable: false })
  created_at!: number;

  @Field(() => Int, { nullable: false })
  updated_at!: number;

  @Field(() => Int, { nullable: false })
  deleted_at!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
