import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { JobDescriptionWhereInput } from './job-description-where.input';
import { JobDescriptionOrderByWithAggregationInput } from './job-description-order-by-with-aggregation.input';
import { JobDescriptionScalarFieldEnum } from './job-description-scalar-field.enum';
import { JobDescriptionScalarWhereWithAggregatesInput } from './job-description-scalar-where-with-aggregates.input';
import { JobDescriptionCountAggregateInput } from './job-description-count-aggregate.input';
import { JobDescriptionMinAggregateInput } from './job-description-min-aggregate.input';
import { JobDescriptionMaxAggregateInput } from './job-description-max-aggregate.input';

@ArgsType()
export class JobDescriptionGroupByArgs {
  @Field(() => JobDescriptionWhereInput, { nullable: true })
  @Type(() => JobDescriptionWhereInput)
  where?: JobDescriptionWhereInput;

  @Field(() => [JobDescriptionOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<JobDescriptionOrderByWithAggregationInput>;

  @Field(() => [JobDescriptionScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof JobDescriptionScalarFieldEnum>;

  @Field(() => JobDescriptionScalarWhereWithAggregatesInput, { nullable: true })
  having?: JobDescriptionScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => JobDescriptionCountAggregateInput, { nullable: true })
  _count?: JobDescriptionCountAggregateInput;

  @Field(() => JobDescriptionMinAggregateInput, { nullable: true })
  _min?: JobDescriptionMinAggregateInput;

  @Field(() => JobDescriptionMaxAggregateInput, { nullable: true })
  _max?: JobDescriptionMaxAggregateInput;
}
