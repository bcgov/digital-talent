import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OccupationGroupWhereInput } from './occupation-group-where.input';
import { OccupationGroupOrderByWithAggregationInput } from './occupation-group-order-by-with-aggregation.input';
import { OccupationGroupScalarFieldEnum } from './occupation-group-scalar-field.enum';
import { OccupationGroupScalarWhereWithAggregatesInput } from './occupation-group-scalar-where-with-aggregates.input';
import { OccupationGroupCountAggregateInput } from './occupation-group-count-aggregate.input';
import { OccupationGroupMinAggregateInput } from './occupation-group-min-aggregate.input';
import { OccupationGroupMaxAggregateInput } from './occupation-group-max-aggregate.input';

@ArgsType()
export class OccupationGroupGroupByArgs {
  @Field(() => OccupationGroupWhereInput, { nullable: true })
  @Type(() => OccupationGroupWhereInput)
  where?: OccupationGroupWhereInput;

  @Field(() => [OccupationGroupOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<OccupationGroupOrderByWithAggregationInput>;

  @Field(() => [OccupationGroupScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof OccupationGroupScalarFieldEnum>;

  @Field(() => OccupationGroupScalarWhereWithAggregatesInput, { nullable: true })
  having?: OccupationGroupScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => OccupationGroupCountAggregateInput, { nullable: true })
  _count?: OccupationGroupCountAggregateInput;

  @Field(() => OccupationGroupMinAggregateInput, { nullable: true })
  _min?: OccupationGroupMinAggregateInput;

  @Field(() => OccupationGroupMaxAggregateInput, { nullable: true })
  _max?: OccupationGroupMaxAggregateInput;
}
