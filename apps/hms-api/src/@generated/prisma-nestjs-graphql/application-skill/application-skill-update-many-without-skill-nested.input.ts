import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ApplicationSkillCreateWithoutSkillInput } from './application-skill-create-without-skill.input';
import { ApplicationSkillCreateOrConnectWithoutSkillInput } from './application-skill-create-or-connect-without-skill.input';
import { ApplicationSkillUpsertWithWhereUniqueWithoutSkillInput } from './application-skill-upsert-with-where-unique-without-skill.input';
import { ApplicationSkillCreateManySkillInputEnvelope } from './application-skill-create-many-skill-input-envelope.input';
import { ApplicationSkillWhereUniqueInput } from './application-skill-where-unique.input';
import { ApplicationSkillUpdateWithWhereUniqueWithoutSkillInput } from './application-skill-update-with-where-unique-without-skill.input';
import { ApplicationSkillUpdateManyWithWhereWithoutSkillInput } from './application-skill-update-many-with-where-without-skill.input';
import { ApplicationSkillScalarWhereInput } from './application-skill-scalar-where.input';

@InputType()
export class ApplicationSkillUpdateManyWithoutSkillNestedInput {
  @Field(() => [ApplicationSkillCreateWithoutSkillInput], { nullable: true })
  @Type(() => ApplicationSkillCreateWithoutSkillInput)
  create?: Array<ApplicationSkillCreateWithoutSkillInput>;

  @Field(() => [ApplicationSkillCreateOrConnectWithoutSkillInput], { nullable: true })
  @Type(() => ApplicationSkillCreateOrConnectWithoutSkillInput)
  connectOrCreate?: Array<ApplicationSkillCreateOrConnectWithoutSkillInput>;

  @Field(() => [ApplicationSkillUpsertWithWhereUniqueWithoutSkillInput], { nullable: true })
  @Type(() => ApplicationSkillUpsertWithWhereUniqueWithoutSkillInput)
  upsert?: Array<ApplicationSkillUpsertWithWhereUniqueWithoutSkillInput>;

  @Field(() => ApplicationSkillCreateManySkillInputEnvelope, { nullable: true })
  @Type(() => ApplicationSkillCreateManySkillInputEnvelope)
  createMany?: ApplicationSkillCreateManySkillInputEnvelope;

  @Field(() => [ApplicationSkillWhereUniqueInput], { nullable: true })
  @Type(() => ApplicationSkillWhereUniqueInput)
  set?: Array<Prisma.AtLeast<ApplicationSkillWhereUniqueInput, 'application_id_skill_id'>>;

  @Field(() => [ApplicationSkillWhereUniqueInput], { nullable: true })
  @Type(() => ApplicationSkillWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<ApplicationSkillWhereUniqueInput, 'application_id_skill_id'>>;

  @Field(() => [ApplicationSkillWhereUniqueInput], { nullable: true })
  @Type(() => ApplicationSkillWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<ApplicationSkillWhereUniqueInput, 'application_id_skill_id'>>;

  @Field(() => [ApplicationSkillWhereUniqueInput], { nullable: true })
  @Type(() => ApplicationSkillWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ApplicationSkillWhereUniqueInput, 'application_id_skill_id'>>;

  @Field(() => [ApplicationSkillUpdateWithWhereUniqueWithoutSkillInput], { nullable: true })
  @Type(() => ApplicationSkillUpdateWithWhereUniqueWithoutSkillInput)
  update?: Array<ApplicationSkillUpdateWithWhereUniqueWithoutSkillInput>;

  @Field(() => [ApplicationSkillUpdateManyWithWhereWithoutSkillInput], { nullable: true })
  @Type(() => ApplicationSkillUpdateManyWithWhereWithoutSkillInput)
  updateMany?: Array<ApplicationSkillUpdateManyWithWhereWithoutSkillInput>;

  @Field(() => [ApplicationSkillScalarWhereInput], { nullable: true })
  @Type(() => ApplicationSkillScalarWhereInput)
  deleteMany?: Array<ApplicationSkillScalarWhereInput>;
}
