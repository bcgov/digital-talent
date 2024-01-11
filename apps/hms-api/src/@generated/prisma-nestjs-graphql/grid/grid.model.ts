import { Field, ObjectType, ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Classification } from '../classification/classification.model';

@ObjectType()
export class Grid {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => [GraphQLJSON], { nullable: true })
  steps!: Array<any>;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: true })
  updated_at!: Date | null;

  @Field(() => Date, { nullable: true })
  deleted_at!: Date | null;

  @Field(() => [Classification], { nullable: true })
  classifications?: Array<Classification>;
}
