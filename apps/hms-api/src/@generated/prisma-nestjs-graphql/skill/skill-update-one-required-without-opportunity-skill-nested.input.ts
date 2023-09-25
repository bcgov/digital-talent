import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SkillCreateWithoutOpportunitySkillInput } from './skill-create-without-opportunity-skill.input';
import { SkillCreateOrConnectWithoutOpportunitySkillInput } from './skill-create-or-connect-without-opportunity-skill.input';
import { SkillUpsertWithoutOpportunitySkillInput } from './skill-upsert-without-opportunity-skill.input';
import { SkillWhereUniqueInput } from './skill-where-unique.input';
import { SkillUpdateToOneWithWhereWithoutOpportunitySkillInput } from './skill-update-to-one-with-where-without-opportunity-skill.input';

@InputType()
export class SkillUpdateOneRequiredWithoutOpportunitySkillNestedInput {
  @Field(() => SkillCreateWithoutOpportunitySkillInput, { nullable: true })
  @Type(() => SkillCreateWithoutOpportunitySkillInput)
  create?: SkillCreateWithoutOpportunitySkillInput;

  @Field(() => SkillCreateOrConnectWithoutOpportunitySkillInput, { nullable: true })
  @Type(() => SkillCreateOrConnectWithoutOpportunitySkillInput)
  connectOrCreate?: SkillCreateOrConnectWithoutOpportunitySkillInput;

  @Field(() => SkillUpsertWithoutOpportunitySkillInput, { nullable: true })
  @Type(() => SkillUpsertWithoutOpportunitySkillInput)
  upsert?: SkillUpsertWithoutOpportunitySkillInput;

  @Field(() => SkillWhereUniqueInput, { nullable: true })
  @Type(() => SkillWhereUniqueInput)
  connect?: Prisma.AtLeast<SkillWhereUniqueInput, 'id'>;

  @Field(() => SkillUpdateToOneWithWhereWithoutOpportunitySkillInput, { nullable: true })
  @Type(() => SkillUpdateToOneWithWhereWithoutOpportunitySkillInput)
  update?: SkillUpdateToOneWithWhereWithoutOpportunitySkillInput;
}
