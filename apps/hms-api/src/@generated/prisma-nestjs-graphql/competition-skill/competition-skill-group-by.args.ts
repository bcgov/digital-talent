import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionSkillWhereInput } from './competition-skill-where.input';
import { CompetitionSkillOrderByWithAggregationInput } from './competition-skill-order-by-with-aggregation.input';
import { CompetitionSkillScalarFieldEnum } from './competition-skill-scalar-field.enum';
import { CompetitionSkillScalarWhereWithAggregatesInput } from './competition-skill-scalar-where-with-aggregates.input';
import { CompetitionSkillCountAggregateInput } from './competition-skill-count-aggregate.input';
import { CompetitionSkillAvgAggregateInput } from './competition-skill-avg-aggregate.input';
import { CompetitionSkillSumAggregateInput } from './competition-skill-sum-aggregate.input';
import { CompetitionSkillMinAggregateInput } from './competition-skill-min-aggregate.input';
import { CompetitionSkillMaxAggregateInput } from './competition-skill-max-aggregate.input';

@ArgsType()
export class CompetitionSkillGroupByArgs {
  @Field(() => CompetitionSkillWhereInput, { nullable: true })
  @Type(() => CompetitionSkillWhereInput)
  where?: CompetitionSkillWhereInput;

  @Field(() => [CompetitionSkillOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<CompetitionSkillOrderByWithAggregationInput>;

  @Field(() => [CompetitionSkillScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof CompetitionSkillScalarFieldEnum>;

  @Field(() => CompetitionSkillScalarWhereWithAggregatesInput, { nullable: true })
  having?: CompetitionSkillScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => CompetitionSkillCountAggregateInput, { nullable: true })
  _count?: CompetitionSkillCountAggregateInput;

  @Field(() => CompetitionSkillAvgAggregateInput, { nullable: true })
  _avg?: CompetitionSkillAvgAggregateInput;

  @Field(() => CompetitionSkillSumAggregateInput, { nullable: true })
  _sum?: CompetitionSkillSumAggregateInput;

  @Field(() => CompetitionSkillMinAggregateInput, { nullable: true })
  _min?: CompetitionSkillMinAggregateInput;

  @Field(() => CompetitionSkillMaxAggregateInput, { nullable: true })
  _max?: CompetitionSkillMaxAggregateInput;
}
