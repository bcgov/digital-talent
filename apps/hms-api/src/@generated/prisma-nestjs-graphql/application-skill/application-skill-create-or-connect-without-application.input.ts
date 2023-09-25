import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ApplicationSkillWhereUniqueInput } from './application-skill-where-unique.input';
import { ApplicationSkillCreateWithoutApplicationInput } from './application-skill-create-without-application.input';

@InputType()
export class ApplicationSkillCreateOrConnectWithoutApplicationInput {
  @Field(() => ApplicationSkillWhereUniqueInput, { nullable: false })
  @Type(() => ApplicationSkillWhereUniqueInput)
  where!: Prisma.AtLeast<ApplicationSkillWhereUniqueInput, 'application_id_skill_id'>;

  @Field(() => ApplicationSkillCreateWithoutApplicationInput, { nullable: false })
  @Type(() => ApplicationSkillCreateWithoutApplicationInput)
  create!: ApplicationSkillCreateWithoutApplicationInput;
}
