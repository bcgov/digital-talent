import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OpportunitySkillWhereInput } from './opportunity-skill-where.input';
import { OpportunitySkillOrderByWithAggregationInput } from './opportunity-skill-order-by-with-aggregation.input';
import { OpportunitySkillScalarFieldEnum } from './opportunity-skill-scalar-field.enum';
import { OpportunitySkillScalarWhereWithAggregatesInput } from './opportunity-skill-scalar-where-with-aggregates.input';
import { OpportunitySkillCountAggregateInput } from './opportunity-skill-count-aggregate.input';
import { OpportunitySkillMinAggregateInput } from './opportunity-skill-min-aggregate.input';
import { OpportunitySkillMaxAggregateInput } from './opportunity-skill-max-aggregate.input';

@ArgsType()
export class OpportunitySkillGroupByArgs {
  @Field(() => OpportunitySkillWhereInput, { nullable: true })
  @Type(() => OpportunitySkillWhereInput)
  where?: OpportunitySkillWhereInput;

  @Field(() => [OpportunitySkillOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<OpportunitySkillOrderByWithAggregationInput>;

  @Field(() => [OpportunitySkillScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof OpportunitySkillScalarFieldEnum>;

  @Field(() => OpportunitySkillScalarWhereWithAggregatesInput, { nullable: true })
  having?: OpportunitySkillScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => OpportunitySkillCountAggregateInput, { nullable: true })
  _count?: OpportunitySkillCountAggregateInput;

  @Field(() => OpportunitySkillMinAggregateInput, { nullable: true })
  _min?: OpportunitySkillMinAggregateInput;

  @Field(() => OpportunitySkillMaxAggregateInput, { nullable: true })
  _max?: OpportunitySkillMaxAggregateInput;
}
