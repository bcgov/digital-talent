import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ApplicationSkillCreateWithoutApplicationInput } from './application-skill-create-without-application.input';
import { ApplicationSkillCreateOrConnectWithoutApplicationInput } from './application-skill-create-or-connect-without-application.input';
import { ApplicationSkillUpsertWithWhereUniqueWithoutApplicationInput } from './application-skill-upsert-with-where-unique-without-application.input';
import { ApplicationSkillCreateManyApplicationInputEnvelope } from './application-skill-create-many-application-input-envelope.input';
import { ApplicationSkillWhereUniqueInput } from './application-skill-where-unique.input';
import { ApplicationSkillUpdateWithWhereUniqueWithoutApplicationInput } from './application-skill-update-with-where-unique-without-application.input';
import { ApplicationSkillUpdateManyWithWhereWithoutApplicationInput } from './application-skill-update-many-with-where-without-application.input';
import { ApplicationSkillScalarWhereInput } from './application-skill-scalar-where.input';

@InputType()
export class ApplicationSkillUpdateManyWithoutApplicationNestedInput {
  @Field(() => [ApplicationSkillCreateWithoutApplicationInput], { nullable: true })
  @Type(() => ApplicationSkillCreateWithoutApplicationInput)
  create?: Array<ApplicationSkillCreateWithoutApplicationInput>;

  @Field(() => [ApplicationSkillCreateOrConnectWithoutApplicationInput], { nullable: true })
  @Type(() => ApplicationSkillCreateOrConnectWithoutApplicationInput)
  connectOrCreate?: Array<ApplicationSkillCreateOrConnectWithoutApplicationInput>;

  @Field(() => [ApplicationSkillUpsertWithWhereUniqueWithoutApplicationInput], { nullable: true })
  @Type(() => ApplicationSkillUpsertWithWhereUniqueWithoutApplicationInput)
  upsert?: Array<ApplicationSkillUpsertWithWhereUniqueWithoutApplicationInput>;

  @Field(() => ApplicationSkillCreateManyApplicationInputEnvelope, { nullable: true })
  @Type(() => ApplicationSkillCreateManyApplicationInputEnvelope)
  createMany?: ApplicationSkillCreateManyApplicationInputEnvelope;

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

  @Field(() => [ApplicationSkillUpdateWithWhereUniqueWithoutApplicationInput], { nullable: true })
  @Type(() => ApplicationSkillUpdateWithWhereUniqueWithoutApplicationInput)
  update?: Array<ApplicationSkillUpdateWithWhereUniqueWithoutApplicationInput>;

  @Field(() => [ApplicationSkillUpdateManyWithWhereWithoutApplicationInput], { nullable: true })
  @Type(() => ApplicationSkillUpdateManyWithWhereWithoutApplicationInput)
  updateMany?: Array<ApplicationSkillUpdateManyWithWhereWithoutApplicationInput>;

  @Field(() => [ApplicationSkillScalarWhereInput], { nullable: true })
  @Type(() => ApplicationSkillScalarWhereInput)
  deleteMany?: Array<ApplicationSkillScalarWhereInput>;
}
