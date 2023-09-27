import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ApplicationCreateWithoutSkillsInput } from './application-create-without-skills.input';
import { ApplicationCreateOrConnectWithoutSkillsInput } from './application-create-or-connect-without-skills.input';
import { ApplicationUpsertWithoutSkillsInput } from './application-upsert-without-skills.input';
import { ApplicationWhereUniqueInput } from './application-where-unique.input';
import { ApplicationUpdateToOneWithWhereWithoutSkillsInput } from './application-update-to-one-with-where-without-skills.input';

@InputType()
export class ApplicationUpdateOneRequiredWithoutSkillsNestedInput {
  @Field(() => ApplicationCreateWithoutSkillsInput, { nullable: true })
  @Type(() => ApplicationCreateWithoutSkillsInput)
  create?: ApplicationCreateWithoutSkillsInput;

  @Field(() => ApplicationCreateOrConnectWithoutSkillsInput, { nullable: true })
  @Type(() => ApplicationCreateOrConnectWithoutSkillsInput)
  connectOrCreate?: ApplicationCreateOrConnectWithoutSkillsInput;

  @Field(() => ApplicationUpsertWithoutSkillsInput, { nullable: true })
  @Type(() => ApplicationUpsertWithoutSkillsInput)
  upsert?: ApplicationUpsertWithoutSkillsInput;

  @Field(() => ApplicationWhereUniqueInput, { nullable: true })
  @Type(() => ApplicationWhereUniqueInput)
  connect?: Prisma.AtLeast<ApplicationWhereUniqueInput, 'id'>;

  @Field(() => ApplicationUpdateToOneWithWhereWithoutSkillsInput, { nullable: true })
  @Type(() => ApplicationUpdateToOneWithWhereWithoutSkillsInput)
  update?: ApplicationUpdateToOneWithWhereWithoutSkillsInput;
}
