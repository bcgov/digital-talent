import { Field, InputType } from '@nestjs/graphql';
import { CompetitionSkillCompetition_idSkill_idCompoundUniqueInput } from './competition-skill-competition-id-skill-id-compound-unique.input';
import { CompetitionSkillWhereInput } from './competition-skill-where.input';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CompetitionRelationFilter } from '../competition/competition-relation-filter.input';
import { SkillRelationFilter } from '../skill/skill-relation-filter.input';

@InputType()
export class CompetitionSkillWhereUniqueInput {
  @Field(() => CompetitionSkillCompetition_idSkill_idCompoundUniqueInput, { nullable: true })
  competition_id_skill_id?: CompetitionSkillCompetition_idSkill_idCompoundUniqueInput;

  @Field(() => [CompetitionSkillWhereInput], { nullable: true })
  AND?: Array<CompetitionSkillWhereInput>;

  @Field(() => [CompetitionSkillWhereInput], { nullable: true })
  OR?: Array<CompetitionSkillWhereInput>;

  @Field(() => [CompetitionSkillWhereInput], { nullable: true })
  NOT?: Array<CompetitionSkillWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  competition_id?: UuidFilter;

  @Field(() => UuidFilter, { nullable: true })
  skill_id?: UuidFilter;

  @Field(() => IntFilter, { nullable: true })
  min_years_experience?: IntFilter;

  @Field(() => BoolFilter, { nullable: true })
  is_required?: BoolFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  deleted_at?: DateTimeFilter;

  @Field(() => CompetitionRelationFilter, { nullable: true })
  competition?: CompetitionRelationFilter;

  @Field(() => SkillRelationFilter, { nullable: true })
  skill?: SkillRelationFilter;
}
