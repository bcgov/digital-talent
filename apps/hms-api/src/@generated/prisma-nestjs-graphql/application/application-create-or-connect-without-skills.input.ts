import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ApplicationWhereUniqueInput } from './application-where-unique.input';
import { ApplicationCreateWithoutSkillsInput } from './application-create-without-skills.input';

@InputType()
export class ApplicationCreateOrConnectWithoutSkillsInput {
  @Field(() => ApplicationWhereUniqueInput, { nullable: false })
  @Type(() => ApplicationWhereUniqueInput)
  where!: Prisma.AtLeast<ApplicationWhereUniqueInput, 'id'>;

  @Field(() => ApplicationCreateWithoutSkillsInput, { nullable: false })
  @Type(() => ApplicationCreateWithoutSkillsInput)
  create!: ApplicationCreateWithoutSkillsInput;
}
