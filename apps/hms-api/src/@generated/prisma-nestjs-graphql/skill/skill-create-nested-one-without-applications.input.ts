import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SkillCreateWithoutApplicationsInput } from './skill-create-without-applications.input';
import { SkillCreateOrConnectWithoutApplicationsInput } from './skill-create-or-connect-without-applications.input';
import { SkillWhereUniqueInput } from './skill-where-unique.input';

@InputType()
export class SkillCreateNestedOneWithoutApplicationsInput {
  @Field(() => SkillCreateWithoutApplicationsInput, { nullable: true })
  @Type(() => SkillCreateWithoutApplicationsInput)
  create?: SkillCreateWithoutApplicationsInput;

  @Field(() => SkillCreateOrConnectWithoutApplicationsInput, { nullable: true })
  @Type(() => SkillCreateOrConnectWithoutApplicationsInput)
  connectOrCreate?: SkillCreateOrConnectWithoutApplicationsInput;

  @Field(() => SkillWhereUniqueInput, { nullable: true })
  @Type(() => SkillWhereUniqueInput)
  connect?: Prisma.AtLeast<SkillWhereUniqueInput, 'id'>;
}
