import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ApplicationSkillCreateWithoutSkillInput } from './application-skill-create-without-skill.input';
import { ApplicationSkillCreateOrConnectWithoutSkillInput } from './application-skill-create-or-connect-without-skill.input';
import { ApplicationSkillCreateManySkillInputEnvelope } from './application-skill-create-many-skill-input-envelope.input';
import { ApplicationSkillWhereUniqueInput } from './application-skill-where-unique.input';

@InputType()
export class ApplicationSkillCreateNestedManyWithoutSkillInput {
  @Field(() => [ApplicationSkillCreateWithoutSkillInput], { nullable: true })
  @Type(() => ApplicationSkillCreateWithoutSkillInput)
  create?: Array<ApplicationSkillCreateWithoutSkillInput>;

  @Field(() => [ApplicationSkillCreateOrConnectWithoutSkillInput], { nullable: true })
  @Type(() => ApplicationSkillCreateOrConnectWithoutSkillInput)
  connectOrCreate?: Array<ApplicationSkillCreateOrConnectWithoutSkillInput>;

  @Field(() => ApplicationSkillCreateManySkillInputEnvelope, { nullable: true })
  @Type(() => ApplicationSkillCreateManySkillInputEnvelope)
  createMany?: ApplicationSkillCreateManySkillInputEnvelope;

  @Field(() => [ApplicationSkillWhereUniqueInput], { nullable: true })
  @Type(() => ApplicationSkillWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ApplicationSkillWhereUniqueInput, 'application_id_skill_id'>>;
}
