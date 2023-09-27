import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class ApplicationCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  applicant_id!: number;

  @Field(() => Int, { nullable: false })
  created_at!: number;

  @Field(() => Int, { nullable: false })
  updated_at!: number;

  @Field(() => Int, { nullable: false })
  deleted_at!: number;

  @Field(() => Int, { nullable: false })
  json!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
