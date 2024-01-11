import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ApplicationSkillWhereUniqueInput } from './application-skill-where-unique.input';
import { ApplicationSkillUpdateWithoutApplicationInput } from './application-skill-update-without-application.input';

@InputType()
export class ApplicationSkillUpdateWithWhereUniqueWithoutApplicationInput {
  @Field(() => ApplicationSkillWhereUniqueInput, { nullable: false })
  @Type(() => ApplicationSkillWhereUniqueInput)
  where!: Prisma.AtLeast<ApplicationSkillWhereUniqueInput, 'application_id_skill_id'>;

  @Field(() => ApplicationSkillUpdateWithoutApplicationInput, { nullable: false })
  @Type(() => ApplicationSkillUpdateWithoutApplicationInput)
  data!: ApplicationSkillUpdateWithoutApplicationInput;
}
