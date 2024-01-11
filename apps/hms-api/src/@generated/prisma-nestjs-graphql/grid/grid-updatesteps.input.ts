import { Field, InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class GridUpdatestepsInput {
  @Field(() => [GraphQLJSON], { nullable: true })
  set?: Array<any>;

  @Field(() => [GraphQLJSON], { nullable: true })
  push?: Array<any>;
}
