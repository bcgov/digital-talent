import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { CompetitionSkillWhereUniqueInput } from './competition-skill-where-unique.input';
import { CompetitionSkillUpdateWithoutSkillInput } from './competition-skill-update-without-skill.input';

@InputType()
export class CompetitionSkillUpdateWithWhereUniqueWithoutSkillInput {
  @Field(() => CompetitionSkillWhereUniqueInput, { nullable: false })
  @Type(() => CompetitionSkillWhereUniqueInput)
  where!: Prisma.AtLeast<CompetitionSkillWhereUniqueInput, 'competition_id_skill_id'>;

  @Field(() => CompetitionSkillUpdateWithoutSkillInput, { nullable: false })
  @Type(() => CompetitionSkillUpdateWithoutSkillInput)
  data!: CompetitionSkillUpdateWithoutSkillInput;
}
