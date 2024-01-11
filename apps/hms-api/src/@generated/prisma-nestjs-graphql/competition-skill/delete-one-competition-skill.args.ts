import { Field, ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { CompetitionSkillWhereUniqueInput } from './competition-skill-where-unique.input';

@ArgsType()
export class DeleteOneCompetitionSkillArgs {
  @Field(() => CompetitionSkillWhereUniqueInput, { nullable: false })
  @Type(() => CompetitionSkillWhereUniqueInput)
  where!: Prisma.AtLeast<CompetitionSkillWhereUniqueInput, 'competition_id_skill_id'>;
}
