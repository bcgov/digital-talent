import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OpportunitySkillWhereInput } from './opportunity-skill-where.input';
import { OpportunitySkillOrderByWithRelationInput } from './opportunity-skill-order-by-with-relation.input';
import { OpportunitySkillWhereUniqueInput } from './opportunity-skill-where-unique.input';
import { OpportunitySkillCountAggregateInput } from './opportunity-skill-count-aggregate.input';
import { OpportunitySkillMinAggregateInput } from './opportunity-skill-min-aggregate.input';
import { OpportunitySkillMaxAggregateInput } from './opportunity-skill-max-aggregate.input';

@ArgsType()
export class OpportunitySkillAggregateArgs {
  @Field(() => OpportunitySkillWhereInput, { nullable: true })
  @Type(() => OpportunitySkillWhereInput)
  where?: OpportunitySkillWhereInput;

  @Field(() => [OpportunitySkillOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<OpportunitySkillOrderByWithRelationInput>;

  @Field(() => OpportunitySkillWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<OpportunitySkillWhereUniqueInput, 'opportunity_id_skill_id'>;

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
