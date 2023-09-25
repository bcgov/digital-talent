import { Field, InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class JsonListFilter {
  @Field(() => [GraphQLJSON], { nullable: true })
  equals?: Array<any>;

  @Field(() => GraphQLJSON, { nullable: true })
  has?: any;

  @Field(() => [GraphQLJSON], { nullable: true })
  hasEvery?: Array<any>;

  @Field(() => [GraphQLJSON], { nullable: true })
  hasSome?: Array<any>;

  @Field(() => Boolean, { nullable: true })
  isEmpty?: boolean;
}
