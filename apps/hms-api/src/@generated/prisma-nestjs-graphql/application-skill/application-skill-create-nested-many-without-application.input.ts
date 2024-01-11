import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ApplicationSkillCreateWithoutApplicationInput } from './application-skill-create-without-application.input';
import { ApplicationSkillCreateOrConnectWithoutApplicationInput } from './application-skill-create-or-connect-without-application.input';
import { ApplicationSkillCreateManyApplicationInputEnvelope } from './application-skill-create-many-application-input-envelope.input';
import { ApplicationSkillWhereUniqueInput } from './application-skill-where-unique.input';

@InputType()
export class ApplicationSkillCreateNestedManyWithoutApplicationInput {
  @Field(() => [ApplicationSkillCreateWithoutApplicationInput], { nullable: true })
  @Type(() => ApplicationSkillCreateWithoutApplicationInput)
  create?: Array<ApplicationSkillCreateWithoutApplicationInput>;

  @Field(() => [ApplicationSkillCreateOrConnectWithoutApplicationInput], { nullable: true })
  @Type(() => ApplicationSkillCreateOrConnectWithoutApplicationInput)
  connectOrCreate?: Array<ApplicationSkillCreateOrConnectWithoutApplicationInput>;

  @Field(() => ApplicationSkillCreateManyApplicationInputEnvelope, { nullable: true })
  @Type(() => ApplicationSkillCreateManyApplicationInputEnvelope)
  createMany?: ApplicationSkillCreateManyApplicationInputEnvelope;

  @Field(() => [ApplicationSkillWhereUniqueInput], { nullable: true })
  @Type(() => ApplicationSkillWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ApplicationSkillWhereUniqueInput, 'application_id_skill_id'>>;
}
