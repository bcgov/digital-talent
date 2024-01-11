import { Field, InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class GridCreatestepsInput {
  @Field(() => [GraphQLJSON], { nullable: false })
  set!: Array<any>;
}
