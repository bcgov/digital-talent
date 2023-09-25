import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CompetitionSkillUpdateInput } from './competition-skill-update.input';
import { CompetitionSkillWhereUniqueInput } from './competition-skill-where-unique.input';

@ArgsType()
export class UpdateOneCompetitionSkillArgs {
  @Field(() => CompetitionSkillUpdateInput, { nullable: false })
  @Type(() => CompetitionSkillUpdateInput)
  data!: CompetitionSkillUpdateInput;

  @Field(() => CompetitionSkillWhereUniqueInput, { nullable: false })
  @Type(() => CompetitionSkillWhereUniqueInput)
  where!: Prisma.AtLeast<CompetitionSkillWhereUniqueInput, 'competition_id_skill_id'>;
}
