import { Field, ObjectType } from '@nestjs/graphql';
import { MinistryCountAggregate } from './ministry-count-aggregate.output';
import { MinistryMinAggregate } from './ministry-min-aggregate.output';
import { MinistryMaxAggregate } from './ministry-max-aggregate.output';

@ObjectType()
export class MinistryGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  deltek_id!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => MinistryCountAggregate, { nullable: true })
  _count?: MinistryCountAggregate;

  @Field(() => MinistryMinAggregate, { nullable: true })
  _min?: MinistryMinAggregate;

  @Field(() => MinistryMaxAggregate, { nullable: true })
  _max?: MinistryMaxAggregate;
}
