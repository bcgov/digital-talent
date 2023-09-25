import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { SkillWhereUniqueInput } from './skill-where-unique.input';
import { SkillCreateWithoutOpportunitySkillInput } from './skill-create-without-opportunity-skill.input';

@InputType()
export class SkillCreateOrConnectWithoutOpportunitySkillInput {
  @Field(() => SkillWhereUniqueInput, { nullable: false })
  @Type(() => SkillWhereUniqueInput)
  where!: Prisma.AtLeast<SkillWhereUniqueInput, 'id'>;

  @Field(() => SkillCreateWithoutOpportunitySkillInput, { nullable: false })
  @Type(() => SkillCreateWithoutOpportunitySkillInput)
  create!: SkillCreateWithoutOpportunitySkillInput;
}
