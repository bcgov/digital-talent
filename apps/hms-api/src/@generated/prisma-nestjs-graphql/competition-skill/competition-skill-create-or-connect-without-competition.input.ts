import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { CompetitionSkillWhereUniqueInput } from './competition-skill-where-unique.input';
import { CompetitionSkillCreateWithoutCompetitionInput } from './competition-skill-create-without-competition.input';

@InputType()
export class CompetitionSkillCreateOrConnectWithoutCompetitionInput {
  @Field(() => CompetitionSkillWhereUniqueInput, { nullable: false })
  @Type(() => CompetitionSkillWhereUniqueInput)
  where!: Prisma.AtLeast<CompetitionSkillWhereUniqueInput, 'competition_id_skill_id'>;

  @Field(() => CompetitionSkillCreateWithoutCompetitionInput, { nullable: false })
  @Type(() => CompetitionSkillCreateWithoutCompetitionInput)
  create!: CompetitionSkillCreateWithoutCompetitionInput;
}
