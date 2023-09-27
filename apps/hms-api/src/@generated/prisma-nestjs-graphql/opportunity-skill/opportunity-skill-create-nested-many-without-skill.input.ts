import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OpportunitySkillCreateWithoutSkillInput } from './opportunity-skill-create-without-skill.input';
import { OpportunitySkillCreateOrConnectWithoutSkillInput } from './opportunity-skill-create-or-connect-without-skill.input';
import { OpportunitySkillCreateManySkillInputEnvelope } from './opportunity-skill-create-many-skill-input-envelope.input';
import { OpportunitySkillWhereUniqueInput } from './opportunity-skill-where-unique.input';

@InputType()
export class OpportunitySkillCreateNestedManyWithoutSkillInput {
  @Field(() => [OpportunitySkillCreateWithoutSkillInput], { nullable: true })
  @Type(() => OpportunitySkillCreateWithoutSkillInput)
  create?: Array<OpportunitySkillCreateWithoutSkillInput>;

  @Field(() => [OpportunitySkillCreateOrConnectWithoutSkillInput], { nullable: true })
  @Type(() => OpportunitySkillCreateOrConnectWithoutSkillInput)
  connectOrCreate?: Array<OpportunitySkillCreateOrConnectWithoutSkillInput>;

  @Field(() => OpportunitySkillCreateManySkillInputEnvelope, { nullable: true })
  @Type(() => OpportunitySkillCreateManySkillInputEnvelope)
  createMany?: OpportunitySkillCreateManySkillInputEnvelope;

  @Field(() => [OpportunitySkillWhereUniqueInput], { nullable: true })
  @Type(() => OpportunitySkillWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<OpportunitySkillWhereUniqueInput, 'opportunity_id_skill_id'>>;
}
