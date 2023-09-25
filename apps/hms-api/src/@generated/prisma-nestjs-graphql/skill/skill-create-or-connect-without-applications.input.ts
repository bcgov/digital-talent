import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { SkillWhereUniqueInput } from './skill-where-unique.input';
import { SkillCreateWithoutApplicationsInput } from './skill-create-without-applications.input';

@InputType()
export class SkillCreateOrConnectWithoutApplicationsInput {
  @Field(() => SkillWhereUniqueInput, { nullable: false })
  @Type(() => SkillWhereUniqueInput)
  where!: Prisma.AtLeast<SkillWhereUniqueInput, 'id'>;

  @Field(() => SkillCreateWithoutApplicationsInput, { nullable: false })
  @Type(() => SkillCreateWithoutApplicationsInput)
  create!: SkillCreateWithoutApplicationsInput;
}
