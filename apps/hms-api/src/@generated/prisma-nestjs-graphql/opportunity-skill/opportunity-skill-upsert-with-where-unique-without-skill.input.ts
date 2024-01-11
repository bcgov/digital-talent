import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { OpportunitySkillWhereUniqueInput } from './opportunity-skill-where-unique.input';
import { OpportunitySkillUpdateWithoutSkillInput } from './opportunity-skill-update-without-skill.input';
import { OpportunitySkillCreateWithoutSkillInput } from './opportunity-skill-create-without-skill.input';

@InputType()
export class OpportunitySkillUpsertWithWhereUniqueWithoutSkillInput {
  @Field(() => OpportunitySkillWhereUniqueInput, { nullable: false })
  @Type(() => OpportunitySkillWhereUniqueInput)
  where!: Prisma.AtLeast<OpportunitySkillWhereUniqueInput, 'opportunity_id_skill_id'>;

  @Field(() => OpportunitySkillUpdateWithoutSkillInput, { nullable: false })
  @Type(() => OpportunitySkillUpdateWithoutSkillInput)
  update!: OpportunitySkillUpdateWithoutSkillInput;

  @Field(() => OpportunitySkillCreateWithoutSkillInput, { nullable: false })
  @Type(() => OpportunitySkillCreateWithoutSkillInput)
  create!: OpportunitySkillCreateWithoutSkillInput;
}
