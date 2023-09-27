import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ApplicationSkillWhereInput } from './application-skill-where.input';
import { ApplicationSkillOrderByWithRelationInput } from './application-skill-order-by-with-relation.input';
import { ApplicationSkillWhereUniqueInput } from './application-skill-where-unique.input';
import { ApplicationSkillCountAggregateInput } from './application-skill-count-aggregate.input';
import { ApplicationSkillAvgAggregateInput } from './application-skill-avg-aggregate.input';
import { ApplicationSkillSumAggregateInput } from './application-skill-sum-aggregate.input';
import { ApplicationSkillMinAggregateInput } from './application-skill-min-aggregate.input';
import { ApplicationSkillMaxAggregateInput } from './application-skill-max-aggregate.input';

@ArgsType()
export class ApplicationSkillAggregateArgs {
  @Field(() => ApplicationSkillWhereInput, { nullable: true })
  @Type(() => ApplicationSkillWhereInput)
  where?: ApplicationSkillWhereInput;

  @Field(() => [ApplicationSkillOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ApplicationSkillOrderByWithRelationInput>;

  @Field(() => ApplicationSkillWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<ApplicationSkillWhereUniqueInput, 'application_id_skill_id'>;

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
