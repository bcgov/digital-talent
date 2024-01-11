import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OpportunitySkillUpdateInput } from './opportunity-skill-update.input';
import { OpportunitySkillWhereUniqueInput } from './opportunity-skill-where-unique.input';

@ArgsType()
export class UpdateOneOpportunitySkillArgs {
  @Field(() => OpportunitySkillUpdateInput, { nullable: false })
  @Type(() => OpportunitySkillUpdateInput)
  data!: OpportunitySkillUpdateInput;

  @Field(() => OpportunitySkillWhereUniqueInput, { nullable: false })
  @Type(() => OpportunitySkillWhereUniqueInput)
  where!: Prisma.AtLeast<OpportunitySkillWhereUniqueInput, 'opportunity_id_skill_id'>;
}
