import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SkillCreateWithoutOpportunitySkillInput } from './skill-create-without-opportunity-skill.input';
import { SkillCreateOrConnectWithoutOpportunitySkillInput } from './skill-create-or-connect-without-opportunity-skill.input';
import { SkillWhereUniqueInput } from './skill-where-unique.input';

@InputType()
export class SkillCreateNestedOneWithoutOpportunitySkillInput {
  @Field(() => SkillCreateWithoutOpportunitySkillInput, { nullable: true })
  @Type(() => SkillCreateWithoutOpportunitySkillInput)
  create?: SkillCreateWithoutOpportunitySkillInput;

  @Field(() => SkillCreateOrConnectWithoutOpportunitySkillInput, { nullable: true })
  @Type(() => SkillCreateOrConnectWithoutOpportunitySkillInput)
  connectOrCreate?: SkillCreateOrConnectWithoutOpportunitySkillInput;

  @Field(() => SkillWhereUniqueInput, { nullable: true })
  @Type(() => SkillWhereUniqueInput)
  connect?: Prisma.AtLeast<SkillWhereUniqueInput, 'id'>;
}
