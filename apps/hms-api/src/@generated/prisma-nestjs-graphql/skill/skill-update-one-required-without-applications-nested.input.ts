import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SkillCreateWithoutApplicationsInput } from './skill-create-without-applications.input';
import { SkillCreateOrConnectWithoutApplicationsInput } from './skill-create-or-connect-without-applications.input';
import { SkillUpsertWithoutApplicationsInput } from './skill-upsert-without-applications.input';
import { SkillWhereUniqueInput } from './skill-where-unique.input';
import { SkillUpdateToOneWithWhereWithoutApplicationsInput } from './skill-update-to-one-with-where-without-applications.input';

@InputType()
export class SkillUpdateOneRequiredWithoutApplicationsNestedInput {
  @Field(() => SkillCreateWithoutApplicationsInput, { nullable: true })
  @Type(() => SkillCreateWithoutApplicationsInput)
  create?: SkillCreateWithoutApplicationsInput;

  @Field(() => SkillCreateOrConnectWithoutApplicationsInput, { nullable: true })
  @Type(() => SkillCreateOrConnectWithoutApplicationsInput)
  connectOrCreate?: SkillCreateOrConnectWithoutApplicationsInput;

  @Field(() => SkillUpsertWithoutApplicationsInput, { nullable: true })
  @Type(() => SkillUpsertWithoutApplicationsInput)
  upsert?: SkillUpsertWithoutApplicationsInput;

  @Field(() => SkillWhereUniqueInput, { nullable: true })
  @Type(() => SkillWhereUniqueInput)
  connect?: Prisma.AtLeast<SkillWhereUniqueInput, 'id'>;

  @Field(() => SkillUpdateToOneWithWhereWithoutApplicationsInput, { nullable: true })
  @Type(() => SkillUpdateToOneWithWhereWithoutApplicationsInput)
  update?: SkillUpdateToOneWithWhereWithoutApplicationsInput;
}
