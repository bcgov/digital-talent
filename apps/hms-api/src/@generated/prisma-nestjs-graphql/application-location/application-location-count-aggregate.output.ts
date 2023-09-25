import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class ApplicationLocationCountAggregate {
  @Field(() => Int, { nullable: false })
  application_id!: number;

  @Field(() => Int, { nullable: false })
  location_id!: number;

  @Field(() => Int, { nullable: false })
  rank!: number;

  @Field(() => Int, { nullable: false })
  created_at!: number;

  @Field(() => Int, { nullable: false })
  updated_at!: number;

  @Field(() => Int, { nullable: false })
  deleted_at!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
