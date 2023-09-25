import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CompetitionSkillWhereInput } from './competition-skill-where.input';
import { CompetitionSkillOrderByWithRelationInput } from './competition-skill-order-by-with-relation.input';
import { CompetitionSkillWhereUniqueInput } from './competition-skill-where-unique.input';
import { CompetitionSkillCountAggregateInput } from './competition-skill-count-aggregate.input';
import { CompetitionSkillAvgAggregateInput } from './competition-skill-avg-aggregate.input';
import { CompetitionSkillSumAggregateInput } from './competition-skill-sum-aggregate.input';
import { CompetitionSkillMinAggregateInput } from './competition-skill-min-aggregate.input';
import { CompetitionSkillMaxAggregateInput } from './competition-skill-max-aggregate.input';

@ArgsType()
export class CompetitionSkillAggregateArgs {
  @Field(() => CompetitionSkillWhereInput, { nullable: true })
  @Type(() => CompetitionSkillWhereInput)
  where?: CompetitionSkillWhereInput;

  @Field(() => [CompetitionSkillOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<CompetitionSkillOrderByWithRelationInput>;

  @Field(() => CompetitionSkillWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<CompetitionSkillWhereUniqueInput, 'competition_id_skill_id'>;

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
