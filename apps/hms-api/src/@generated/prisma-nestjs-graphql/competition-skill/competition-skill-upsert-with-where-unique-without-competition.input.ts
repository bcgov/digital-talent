import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { CompetitionSkillWhereUniqueInput } from './competition-skill-where-unique.input';
import { CompetitionSkillUpdateWithoutCompetitionInput } from './competition-skill-update-without-competition.input';
import { CompetitionSkillCreateWithoutCompetitionInput } from './competition-skill-create-without-competition.input';

@InputType()
export class CompetitionSkillUpsertWithWhereUniqueWithoutCompetitionInput {
  @Field(() => CompetitionSkillWhereUniqueInput, { nullable: false })
  @Type(() => CompetitionSkillWhereUniqueInput)
  where!: Prisma.AtLeast<CompetitionSkillWhereUniqueInput, 'competition_id_skill_id'>;

  @Field(() => CompetitionSkillUpdateWithoutCompetitionInput, { nullable: false })
  @Type(() => CompetitionSkillUpdateWithoutCompetitionInput)
  update!: CompetitionSkillUpdateWithoutCompetitionInput;

  @Field(() => CompetitionSkillCreateWithoutCompetitionInput, { nullable: false })
  @Type(() => CompetitionSkillCreateWithoutCompetitionInput)
  create!: CompetitionSkillCreateWithoutCompetitionInput;
}
