import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ApplicationCreateWithoutSkillsInput } from './application-create-without-skills.input';
import { ApplicationCreateOrConnectWithoutSkillsInput } from './application-create-or-connect-without-skills.input';
import { ApplicationWhereUniqueInput } from './application-where-unique.input';

@InputType()
export class ApplicationCreateNestedOneWithoutSkillsInput {
  @Field(() => ApplicationCreateWithoutSkillsInput, { nullable: true })
  @Type(() => ApplicationCreateWithoutSkillsInput)
  create?: ApplicationCreateWithoutSkillsInput;

  @Field(() => ApplicationCreateOrConnectWithoutSkillsInput, { nullable: true })
  @Type(() => ApplicationCreateOrConnectWithoutSkillsInput)
  connectOrCreate?: ApplicationCreateOrConnectWithoutSkillsInput;

  @Field(() => ApplicationWhereUniqueInput, { nullable: true })
  @Type(() => ApplicationWhereUniqueInput)
  connect?: Prisma.AtLeast<ApplicationWhereUniqueInput, 'id'>;
}
