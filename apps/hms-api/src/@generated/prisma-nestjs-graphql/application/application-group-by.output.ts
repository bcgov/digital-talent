import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ApplicationCountAggregate } from './application-count-aggregate.output';
import { ApplicationMinAggregate } from './application-min-aggregate.output';
import { ApplicationMaxAggregate } from './application-max-aggregate.output';

@ObjectType()
export class ApplicationGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  applicant_id!: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => GraphQLJSON, { nullable: false })
  json!: any;

  @Field(() => ApplicationCountAggregate, { nullable: true })
  _count?: ApplicationCountAggregate;

  @Field(() => ApplicationMinAggregate, { nullable: true })
  _min?: ApplicationMinAggregate;

  @Field(() => ApplicationMaxAggregate, { nullable: true })
  _max?: ApplicationMaxAggregate;
}
