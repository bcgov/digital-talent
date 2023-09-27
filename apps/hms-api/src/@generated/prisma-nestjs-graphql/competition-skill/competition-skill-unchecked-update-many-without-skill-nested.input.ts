import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CompetitionSkillCreateWithoutSkillInput } from './competition-skill-create-without-skill.input';
import { CompetitionSkillCreateOrConnectWithoutSkillInput } from './competition-skill-create-or-connect-without-skill.input';
import { CompetitionSkillUpsertWithWhereUniqueWithoutSkillInput } from './competition-skill-upsert-with-where-unique-without-skill.input';
import { CompetitionSkillCreateManySkillInputEnvelope } from './competition-skill-create-many-skill-input-envelope.input';
import { CompetitionSkillWhereUniqueInput } from './competition-skill-where-unique.input';
import { CompetitionSkillUpdateWithWhereUniqueWithoutSkillInput } from './competition-skill-update-with-where-unique-without-skill.input';
import { CompetitionSkillUpdateManyWithWhereWithoutSkillInput } from './competition-skill-update-many-with-where-without-skill.input';
import { CompetitionSkillScalarWhereInput } from './competition-skill-scalar-where.input';

@InputType()
export class CompetitionSkillUncheckedUpdateManyWithoutSkillNestedInput {
  @Field(() => [CompetitionSkillCreateWithoutSkillInput], { nullable: true })
  @Type(() => CompetitionSkillCreateWithoutSkillInput)
  create?: Array<CompetitionSkillCreateWithoutSkillInput>;

  @Field(() => [CompetitionSkillCreateOrConnectWithoutSkillInput], { nullable: true })
  @Type(() => CompetitionSkillCreateOrConnectWithoutSkillInput)
  connectOrCreate?: Array<CompetitionSkillCreateOrConnectWithoutSkillInput>;

  @Field(() => [CompetitionSkillUpsertWithWhereUniqueWithoutSkillInput], { nullable: true })
  @Type(() => CompetitionSkillUpsertWithWhereUniqueWithoutSkillInput)
  upsert?: Array<CompetitionSkillUpsertWithWhereUniqueWithoutSkillInput>;

  @Field(() => CompetitionSkillCreateManySkillInputEnvelope, { nullable: true })
  @Type(() => CompetitionSkillCreateManySkillInputEnvelope)
  createMany?: CompetitionSkillCreateManySkillInputEnvelope;

  @Field(() => [CompetitionSkillWhereUniqueInput], { nullable: true })
  @Type(() => CompetitionSkillWhereUniqueInput)
  set?: Array<Prisma.AtLeast<CompetitionSkillWhereUniqueInput, 'competition_id_skill_id'>>;

  @Field(() => [CompetitionSkillWhereUniqueInput], { nullable: true })
  @Type(() => CompetitionSkillWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<CompetitionSkillWhereUniqueInput, 'competition_id_skill_id'>>;

  @Field(() => [CompetitionSkillWhereUniqueInput], { nullable: true })
  @Type(() => CompetitionSkillWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<CompetitionSkillWhereUniqueInput, 'competition_id_skill_id'>>;

  @Field(() => [CompetitionSkillWhereUniqueInput], { nullable: true })
  @Type(() => CompetitionSkillWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<CompetitionSkillWhereUniqueInput, 'competition_id_skill_id'>>;

  @Field(() => [CompetitionSkillUpdateWithWhereUniqueWithoutSkillInput], { nullable: true })
  @Type(() => CompetitionSkillUpdateWithWhereUniqueWithoutSkillInput)
  update?: Array<CompetitionSkillUpdateWithWhereUniqueWithoutSkillInput>;

  @Field(() => [CompetitionSkillUpdateManyWithWhereWithoutSkillInput], { nullable: true })
  @Type(() => CompetitionSkillUpdateManyWithWhereWithoutSkillInput)
  updateMany?: Array<CompetitionSkillUpdateManyWithWhereWithoutSkillInput>;

  @Field(() => [CompetitionSkillScalarWhereInput], { nullable: true })
  @Type(() => CompetitionSkillScalarWhereInput)
  deleteMany?: Array<CompetitionSkillScalarWhereInput>;
}
