import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { CompetitionSkillWhereUniqueInput } from './competition-skill-where-unique.input';
import { CompetitionSkillUpdateWithoutSkillInput } from './competition-skill-update-without-skill.input';
import { CompetitionSkillCreateWithoutSkillInput } from './competition-skill-create-without-skill.input';

@InputType()
export class CompetitionSkillUpsertWithWhereUniqueWithoutSkillInput {
  @Field(() => CompetitionSkillWhereUniqueInput, { nullable: false })
  @Type(() => CompetitionSkillWhereUniqueInput)
  where!: Prisma.AtLeast<CompetitionSkillWhereUniqueInput, 'competition_id_skill_id'>;

  @Field(() => CompetitionSkillUpdateWithoutSkillInput, { nullable: false })
  @Type(() => CompetitionSkillUpdateWithoutSkillInput)
  update!: CompetitionSkillUpdateWithoutSkillInput;

  @Field(() => CompetitionSkillCreateWithoutSkillInput, { nullable: false })
  @Type(() => CompetitionSkillCreateWithoutSkillInput)
  create!: CompetitionSkillCreateWithoutSkillInput;
}
