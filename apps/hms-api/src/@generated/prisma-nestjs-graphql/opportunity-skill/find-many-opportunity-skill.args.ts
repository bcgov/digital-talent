import { Field, ArgsType, HideField, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OpportunitySkillWhereInput } from './opportunity-skill-where.input';
import { OpportunitySkillOrderByWithRelationInput } from './opportunity-skill-order-by-with-relation.input';
import { OpportunitySkillWhereUniqueInput } from './opportunity-skill-where-unique.input';
import { OpportunitySkillScalarFieldEnum } from './opportunity-skill-scalar-field.enum';

@ArgsType()
export class FindManyOpportunitySkillArgs {
  @Field(() => OpportunitySkillWhereInput, { nullable: true })
  @Type(() => OpportunitySkillWhereInput)
  where?: OpportunitySkillWhereInput;

  @Field(() => [OpportunitySkillOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<OpportunitySkillOrderByWithRelationInput>;

  @HideField()
  cursor?: Prisma.AtLeast<OpportunitySkillWhereUniqueInput, 'opportunity_id_skill_id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @HideField()
  distinct?: Array<keyof typeof OpportunitySkillScalarFieldEnum>;
}
