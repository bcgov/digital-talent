import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ApplicationSkillWhereInput } from './application-skill-where.input';
import { ApplicationSkillOrderByWithAggregationInput } from './application-skill-order-by-with-aggregation.input';
import { ApplicationSkillScalarFieldEnum } from './application-skill-scalar-field.enum';
import { ApplicationSkillScalarWhereWithAggregatesInput } from './application-skill-scalar-where-with-aggregates.input';
import { ApplicationSkillCountAggregateInput } from './application-skill-count-aggregate.input';
import { ApplicationSkillAvgAggregateInput } from './application-skill-avg-aggregate.input';
import { ApplicationSkillSumAggregateInput } from './application-skill-sum-aggregate.input';
import { ApplicationSkillMinAggregateInput } from './application-skill-min-aggregate.input';
import { ApplicationSkillMaxAggregateInput } from './application-skill-max-aggregate.input';

@ArgsType()
export class ApplicationSkillGroupByArgs {
  @Field(() => ApplicationSkillWhereInput, { nullable: true })
  @Type(() => ApplicationSkillWhereInput)
  where?: ApplicationSkillWhereInput;

  @Field(() => [ApplicationSkillOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<ApplicationSkillOrderByWithAggregationInput>;

  @Field(() => [ApplicationSkillScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof ApplicationSkillScalarFieldEnum>;

  @Field(() => ApplicationSkillScalarWhereWithAggregatesInput, { nullable: true })
  having?: ApplicationSkillScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => ApplicationSkillCountAggregateInput, { nullable: true })
  _count?: ApplicationSkillCountAggregateInput;

  @Field(() => ApplicationSkillAvgAggregateInput, { nullable: true })
  _avg?: ApplicationSkillAvgAggregateInput;

  @Field(() => ApplicationSkillSumAggregateInput, { nullable: true })
  _sum?: ApplicationSkillSumAggregateInput;

  @Field(() => ApplicationSkillMinAggregateInput, { nullable: true })
  _min?: ApplicationSkillMinAggregateInput;

  @Field(() => ApplicationSkillMaxAggregateInput, { nullable: true })
  _max?: ApplicationSkillMaxAggregateInput;
}
