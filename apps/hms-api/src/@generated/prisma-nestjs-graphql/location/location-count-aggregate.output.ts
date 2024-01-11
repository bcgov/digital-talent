import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class LocationCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  deltek_id!: number;

  @Field(() => Int, { nullable: false })
  name!: number;

  @Field(() => Int, { nullable: false })
  postal_code!: number;

  @Field(() => Int, { nullable: false })
  lat!: number;

  @Field(() => Int, { nullable: false })
  lon!: number;

  @Field(() => Int, { nullable: false })
  region!: number;

  @Field(() => Int, { nullable: false })
  created_at!: number;

  @Field(() => Int, { nullable: false })
  updated_at!: number;

  @Field(() => Int, { nullable: false })
  deleted_at!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
