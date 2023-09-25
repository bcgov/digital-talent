import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { GridCountAggregate } from './grid-count-aggregate.output';
import { GridMinAggregate } from './grid-min-aggregate.output';
import { GridMaxAggregate } from './grid-max-aggregate.output';

@ObjectType()
export class GridGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => [GraphQLJSON], { nullable: true })
  steps?: Array<any>;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => GridCountAggregate, { nullable: true })
  _count?: GridCountAggregate;

  @Field(() => GridMinAggregate, { nullable: true })
  _min?: GridMinAggregate;

  @Field(() => GridMaxAggregate, { nullable: true })
  _max?: GridMaxAggregate;
}
