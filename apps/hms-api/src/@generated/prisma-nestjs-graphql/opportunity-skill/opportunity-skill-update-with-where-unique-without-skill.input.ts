import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { OpportunitySkillWhereUniqueInput } from './opportunity-skill-where-unique.input';
import { OpportunitySkillUpdateWithoutSkillInput } from './opportunity-skill-update-without-skill.input';

@InputType()
export class OpportunitySkillUpdateWithWhereUniqueWithoutSkillInput {
  @Field(() => OpportunitySkillWhereUniqueInput, { nullable: false })
  @Type(() => OpportunitySkillWhereUniqueInput)
  where!: Prisma.AtLeast<OpportunitySkillWhereUniqueInput, 'opportunity_id_skill_id'>;

  @Field(() => OpportunitySkillUpdateWithoutSkillInput, { nullable: false })
  @Type(() => OpportunitySkillUpdateWithoutSkillInput)
  data!: OpportunitySkillUpdateWithoutSkillInput;
}
