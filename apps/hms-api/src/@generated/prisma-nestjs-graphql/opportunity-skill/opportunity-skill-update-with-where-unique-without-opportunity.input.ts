import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { OpportunitySkillWhereUniqueInput } from './opportunity-skill-where-unique.input';
import { OpportunitySkillUpdateWithoutOpportunityInput } from './opportunity-skill-update-without-opportunity.input';

@InputType()
export class OpportunitySkillUpdateWithWhereUniqueWithoutOpportunityInput {
  @Field(() => OpportunitySkillWhereUniqueInput, { nullable: false })
  @Type(() => OpportunitySkillWhereUniqueInput)
  where!: Prisma.AtLeast<OpportunitySkillWhereUniqueInput, 'opportunity_id_skill_id'>;

  @Field(() => OpportunitySkillUpdateWithoutOpportunityInput, { nullable: false })
  @Type(() => OpportunitySkillUpdateWithoutOpportunityInput)
  data!: OpportunitySkillUpdateWithoutOpportunityInput;
}
