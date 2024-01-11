import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class OccupationGroupCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  code!: number;

  @Field(() => Int, { nullable: false })
  name!: number;

  @Field(() => Int, { nullable: false })
  created_at!: number;

  @Field(() => Int, { nullable: false })
  updated_at!: number;

  @Field(() => Int, { nullable: false })
  deleted_at!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
