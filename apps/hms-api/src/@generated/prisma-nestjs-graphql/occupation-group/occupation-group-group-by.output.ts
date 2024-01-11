import { Field, ObjectType } from '@nestjs/graphql';
import { OccupationGroupCountAggregate } from './occupation-group-count-aggregate.output';
import { OccupationGroupMinAggregate } from './occupation-group-min-aggregate.output';
import { OccupationGroupMaxAggregate } from './occupation-group-max-aggregate.output';

@ObjectType()
export class OccupationGroupGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  code!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => OccupationGroupCountAggregate, { nullable: true })
  _count?: OccupationGroupCountAggregate;

  @Field(() => OccupationGroupMinAggregate, { nullable: true })
  _min?: OccupationGroupMinAggregate;

  @Field(() => OccupationGroupMaxAggregate, { nullable: true })
  _max?: OccupationGroupMaxAggregate;
}
