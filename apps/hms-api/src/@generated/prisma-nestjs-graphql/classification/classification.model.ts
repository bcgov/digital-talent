import { Field, ObjectType, ID } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { JobDescription } from '../job-description/job-description.model';
import { Grid } from '../grid/grid.model';
import { OccupationGroup } from '../occupation-group/occupation-group.model';

@ObjectType()
export class Classification {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  grid_id!: string;

  @Field(() => String, { nullable: false })
  occupation_group_id!: string;

  @Field(() => GraphQLDecimal, { nullable: false, defaultValue: 0 })
  rate_adjustment!: Decimal;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: true })
  updated_at!: Date | null;

  @Field(() => Date, { nullable: true })
  deleted_at!: Date | null;

  @Field(() => [JobDescription], { nullable: true })
  job_descriptions?: Array<JobDescription>;

  @Field(() => Grid, { nullable: false })
  grid?: Grid;

  @Field(() => OccupationGroup, { nullable: false })
  occupation_group?: OccupationGroup;
}
