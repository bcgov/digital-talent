import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ApplicationSkillWhereUniqueInput } from './application-skill-where-unique.input';
import { ApplicationSkillUpdateWithoutSkillInput } from './application-skill-update-without-skill.input';
import { ApplicationSkillCreateWithoutSkillInput } from './application-skill-create-without-skill.input';

@InputType()
export class ApplicationSkillUpsertWithWhereUniqueWithoutSkillInput {
  @Field(() => ApplicationSkillWhereUniqueInput, { nullable: false })
  @Type(() => ApplicationSkillWhereUniqueInput)
  where!: Prisma.AtLeast<ApplicationSkillWhereUniqueInput, 'application_id_skill_id'>;

  @Field(() => ApplicationSkillUpdateWithoutSkillInput, { nullable: false })
  @Type(() => ApplicationSkillUpdateWithoutSkillInput)
  update!: ApplicationSkillUpdateWithoutSkillInput;

  @Field(() => ApplicationSkillCreateWithoutSkillInput, { nullable: false })
  @Type(() => ApplicationSkillCreateWithoutSkillInput)
  create!: ApplicationSkillCreateWithoutSkillInput;
}
