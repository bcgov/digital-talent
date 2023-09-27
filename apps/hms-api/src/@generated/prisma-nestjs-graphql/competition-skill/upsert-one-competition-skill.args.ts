import { Field, ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { CompetitionSkillWhereUniqueInput } from './competition-skill-where-unique.input';
import { CompetitionSkillCreateInput } from './competition-skill-create.input';
import { CompetitionSkillUpdateInput } from './competition-skill-update.input';

@ArgsType()
export class UpsertOneCompetitionSkillArgs {
  @Field(() => CompetitionSkillWhereUniqueInput, { nullable: false })
  @Type(() => CompetitionSkillWhereUniqueInput)
  where!: Prisma.AtLeast<CompetitionSkillWhereUniqueInput, 'competition_id_skill_id'>;

  @Field(() => CompetitionSkillCreateInput, { nullable: false })
  @Type(() => CompetitionSkillCreateInput)
  create!: CompetitionSkillCreateInput;

  @Field(() => CompetitionSkillUpdateInput, { nullable: false })
  @Type(() => CompetitionSkillUpdateInput)
  update!: CompetitionSkillUpdateInput;
}
