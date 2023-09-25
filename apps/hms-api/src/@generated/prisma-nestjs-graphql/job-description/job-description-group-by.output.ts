import { Field, ObjectType } from '@nestjs/graphql';
import { JobDescriptionCountAggregate } from './job-description-count-aggregate.output';
import { JobDescriptionMinAggregate } from './job-description-min-aggregate.output';
import { JobDescriptionMaxAggregate } from './job-description-max-aggregate.output';

@ObjectType()
export class JobDescriptionGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  classification_id!: string;

  @Field(() => String, { nullable: true })
  e_class_id?: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => JobDescriptionCountAggregate, { nullable: true })
  _count?: JobDescriptionCountAggregate;

  @Field(() => JobDescriptionMinAggregate, { nullable: true })
  _min?: JobDescriptionMinAggregate;

  @Field(() => JobDescriptionMaxAggregate, { nullable: true })
  _max?: JobDescriptionMaxAggregate;
}
