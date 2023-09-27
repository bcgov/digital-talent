import { Field, ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { OpportunitySkillWhereUniqueInput } from './opportunity-skill-where-unique.input';
import { OpportunitySkillCreateInput } from './opportunity-skill-create.input';
import { OpportunitySkillUpdateInput } from './opportunity-skill-update.input';

@ArgsType()
export class UpsertOneOpportunitySkillArgs {
  @Field(() => OpportunitySkillWhereUniqueInput, { nullable: false })
  @Type(() => OpportunitySkillWhereUniqueInput)
  where!: Prisma.AtLeast<OpportunitySkillWhereUniqueInput, 'opportunity_id_skill_id'>;

  @Field(() => OpportunitySkillCreateInput, { nullable: false })
  @Type(() => OpportunitySkillCreateInput)
  create!: OpportunitySkillCreateInput;

  @Field(() => OpportunitySkillUpdateInput, { nullable: false })
  @Type(() => OpportunitySkillUpdateInput)
  update!: OpportunitySkillUpdateInput;
}
