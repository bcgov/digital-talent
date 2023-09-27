import { Field, ObjectType } from '@nestjs/graphql';
import { GridCountAggregate } from './grid-count-aggregate.output';
import { GridMinAggregate } from './grid-min-aggregate.output';
import { GridMaxAggregate } from './grid-max-aggregate.output';

@ObjectType()
export class AggregateGrid {
  @Field(() => GridCountAggregate, { nullable: true })
  _count?: GridCountAggregate;

  @Field(() => GridMinAggregate, { nullable: true })
  _min?: GridMinAggregate;

  @Field(() => GridMaxAggregate, { nullable: true })
  _max?: GridMaxAggregate;
}
