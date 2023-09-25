import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OpportunitySkillCreateWithoutSkillInput } from './opportunity-skill-create-without-skill.input';
import { OpportunitySkillCreateOrConnectWithoutSkillInput } from './opportunity-skill-create-or-connect-without-skill.input';
import { OpportunitySkillUpsertWithWhereUniqueWithoutSkillInput } from './opportunity-skill-upsert-with-where-unique-without-skill.input';
import { OpportunitySkillCreateManySkillInputEnvelope } from './opportunity-skill-create-many-skill-input-envelope.input';
import { OpportunitySkillWhereUniqueInput } from './opportunity-skill-where-unique.input';
import { OpportunitySkillUpdateWithWhereUniqueWithoutSkillInput } from './opportunity-skill-update-with-where-unique-without-skill.input';
import { OpportunitySkillUpdateManyWithWhereWithoutSkillInput } from './opportunity-skill-update-many-with-where-without-skill.input';
import { OpportunitySkillScalarWhereInput } from './opportunity-skill-scalar-where.input';

@InputType()
export class OpportunitySkillUncheckedUpdateManyWithoutSkillNestedInput {
  @Field(() => [OpportunitySkillCreateWithoutSkillInput], { nullable: true })
  @Type(() => OpportunitySkillCreateWithoutSkillInput)
  create?: Array<OpportunitySkillCreateWithoutSkillInput>;

  @Field(() => [OpportunitySkillCreateOrConnectWithoutSkillInput], { nullable: true })
  @Type(() => OpportunitySkillCreateOrConnectWithoutSkillInput)
  connectOrCreate?: Array<OpportunitySkillCreateOrConnectWithoutSkillInput>;

  @Field(() => [OpportunitySkillUpsertWithWhereUniqueWithoutSkillInput], { nullable: true })
  @Type(() => OpportunitySkillUpsertWithWhereUniqueWithoutSkillInput)
  upsert?: Array<OpportunitySkillUpsertWithWhereUniqueWithoutSkillInput>;

  @Field(() => OpportunitySkillCreateManySkillInputEnvelope, { nullable: true })
  @Type(() => OpportunitySkillCreateManySkillInputEnvelope)
  createMany?: OpportunitySkillCreateManySkillInputEnvelope;

  @Field(() => [OpportunitySkillWhereUniqueInput], { nullable: true })
  @Type(() => OpportunitySkillWhereUniqueInput)
  set?: Array<Prisma.AtLeast<OpportunitySkillWhereUniqueInput, 'opportunity_id_skill_id'>>;

  @Field(() => [OpportunitySkillWhereUniqueInput], { nullable: true })
  @Type(() => OpportunitySkillWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<OpportunitySkillWhereUniqueInput, 'opportunity_id_skill_id'>>;

  @Field(() => [OpportunitySkillWhereUniqueInput], { nullable: true })
  @Type(() => OpportunitySkillWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<OpportunitySkillWhereUniqueInput, 'opportunity_id_skill_id'>>;

  @Field(() => [OpportunitySkillWhereUniqueInput], { nullable: true })
  @Type(() => OpportunitySkillWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<OpportunitySkillWhereUniqueInput, 'opportunity_id_skill_id'>>;

  @Field(() => [OpportunitySkillUpdateWithWhereUniqueWithoutSkillInput], { nullable: true })
  @Type(() => OpportunitySkillUpdateWithWhereUniqueWithoutSkillInput)
  update?: Array<OpportunitySkillUpdateWithWhereUniqueWithoutSkillInput>;

  @Field(() => [OpportunitySkillUpdateManyWithWhereWithoutSkillInput], { nullable: true })
  @Type(() => OpportunitySkillUpdateManyWithWhereWithoutSkillInput)
  updateMany?: Array<OpportunitySkillUpdateManyWithWhereWithoutSkillInput>;

  @Field(() => [OpportunitySkillScalarWhereInput], { nullable: true })
  @Type(() => OpportunitySkillScalarWhereInput)
  deleteMany?: Array<OpportunitySkillScalarWhereInput>;
}
