import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { JobDescriptionWhereInput } from './job-description-where.input';
import { JobDescriptionOrderByWithRelationInput } from './job-description-order-by-with-relation.input';
import { JobDescriptionWhereUniqueInput } from './job-description-where-unique.input';
import { JobDescriptionCountAggregateInput } from './job-description-count-aggregate.input';
import { JobDescriptionMinAggregateInput } from './job-description-min-aggregate.input';
import { JobDescriptionMaxAggregateInput } from './job-description-max-aggregate.input';

@ArgsType()
export class JobDescriptionAggregateArgs {
  @Field(() => JobDescriptionWhereInput, { nullable: true })
  @Type(() => JobDescriptionWhereInput)
  where?: JobDescriptionWhereInput;

  @Field(() => [JobDescriptionOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<JobDescriptionOrderByWithRelationInput>;

  @Field(() => JobDescriptionWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<JobDescriptionWhereUniqueInput, 'id'>;

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
