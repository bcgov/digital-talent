import { Field, ObjectType } from '@nestjs/graphql';
import { JobDescriptionCountAggregate } from './job-description-count-aggregate.output';
import { JobDescriptionMinAggregate } from './job-description-min-aggregate.output';
import { JobDescriptionMaxAggregate } from './job-description-max-aggregate.output';

@ObjectType()
export class AggregateJobDescription {
  @Field(() => JobDescriptionCountAggregate, { nullable: true })
  _count?: JobDescriptionCountAggregate;

  @Field(() => JobDescriptionMinAggregate, { nullable: true })
  _min?: JobDescriptionMinAggregate;

  @Field(() => JobDescriptionMaxAggregate, { nullable: true })
  _max?: JobDescriptionMaxAggregate;
}
