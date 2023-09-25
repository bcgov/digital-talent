import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { OpportunitySkillWhereUniqueInput } from './opportunity-skill-where-unique.input';
import { OpportunitySkillCreateWithoutOpportunityInput } from './opportunity-skill-create-without-opportunity.input';

@InputType()
export class OpportunitySkillCreateOrConnectWithoutOpportunityInput {
  @Field(() => OpportunitySkillWhereUniqueInput, { nullable: false })
  @Type(() => OpportunitySkillWhereUniqueInput)
  where!: Prisma.AtLeast<OpportunitySkillWhereUniqueInput, 'opportunity_id_skill_id'>;

  @Field(() => OpportunitySkillCreateWithoutOpportunityInput, { nullable: false })
  @Type(() => OpportunitySkillCreateWithoutOpportunityInput)
  create!: OpportunitySkillCreateWithoutOpportunityInput;
}
