import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IdentityWhereInput } from './identity-where.input';
import { IdentityOrderByWithAggregationInput } from './identity-order-by-with-aggregation.input';
import { IdentityScalarFieldEnum } from './identity-scalar-field.enum';
import { IdentityScalarWhereWithAggregatesInput } from './identity-scalar-where-with-aggregates.input';
import { IdentityCountAggregateInput } from './identity-count-aggregate.input';
import { IdentityMinAggregateInput } from './identity-min-aggregate.input';
import { IdentityMaxAggregateInput } from './identity-max-aggregate.input';

@ArgsType()
export class IdentityGroupByArgs {
  @Field(() => IdentityWhereInput, { nullable: true })
  @Type(() => IdentityWhereInput)
  where?: IdentityWhereInput;

  @Field(() => [IdentityOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<IdentityOrderByWithAggregationInput>;

  @Field(() => [IdentityScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof IdentityScalarFieldEnum>;

  @Field(() => IdentityScalarWhereWithAggregatesInput, { nullable: true })
  having?: IdentityScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => IdentityCountAggregateInput, { nullable: true })
  _count?: IdentityCountAggregateInput;

  @Field(() => IdentityMinAggregateInput, { nullable: true })
  _min?: IdentityMinAggregateInput;

  @Field(() => IdentityMaxAggregateInput, { nullable: true })
  _max?: IdentityMaxAggregateInput;
}
