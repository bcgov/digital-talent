import { Field, ObjectType } from '@nestjs/graphql';
import { ApplicationCountAggregate } from './application-count-aggregate.output';
import { ApplicationMinAggregate } from './application-min-aggregate.output';
import { ApplicationMaxAggregate } from './application-max-aggregate.output';

@ObjectType()
export class AggregateApplication {
  @Field(() => ApplicationCountAggregate, { nullable: true })
  _count?: ApplicationCountAggregate;

  @Field(() => ApplicationMinAggregate, { nullable: true })
  _min?: ApplicationMinAggregate;

  @Field(() => ApplicationMaxAggregate, { nullable: true })
  _max?: ApplicationMaxAggregate;
}
