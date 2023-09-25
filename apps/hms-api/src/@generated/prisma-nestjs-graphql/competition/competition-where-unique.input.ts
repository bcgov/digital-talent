import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionWhereInput } from './competition-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { EnumCompetitionCategoryFilter } from '../prisma/enum-competition-category-filter.input';
import { EnumCompetitionStateFilter } from '../prisma/enum-competition-state-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { OpportunityListRelationFilter } from '../opportunity/opportunity-list-relation-filter.input';
import { ElistListRelationFilter } from '../elist/elist-list-relation-filter.input';
import { CompetitionSkillListRelationFilter } from '../competition-skill/competition-skill-list-relation-filter.input';
import { JobDescriptionRelationFilter } from '../job-description/job-description-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { CompetitionScheduleRelationFilter } from '../competition-schedule/competition-schedule-relation-filter.input';

@InputType()
export class CompetitionWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => [CompetitionWhereInput], { nullable: true })
  AND?: Array<CompetitionWhereInput>;

  @Field(() => [CompetitionWhereInput], { nullable: true })
  OR?: Array<CompetitionWhereInput>;

  @Field(() => [CompetitionWhereInput], { nullable: true })
  NOT?: Array<CompetitionWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  deltek_id?: StringFilter;

  @Field(() => UuidFilter, { nullable: true })
  job_description_id?: UuidFilter;

  @Field(() => UuidFilter, { nullable: true })
  recruiter_id?: UuidFilter;

  @Field(() => EnumCompetitionCategoryFilter, { nullable: true })
  category?: EnumCompetitionCategoryFilter;

  @Field(() => EnumCompetitionStateFilter, { nullable: true })
  state?: EnumCompetitionStateFilter;

  @Field(() => JsonFilter, { nullable: true })
  metadata?: JsonFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  deleted_at?: DateTimeFilter;

  @Field(() => OpportunityListRelationFilter, { nullable: true })
  opportunities?: OpportunityListRelationFilter;

  @Field(() => ElistListRelationFilter, { nullable: true })
  elist?: ElistListRelationFilter;

  @Field(() => CompetitionSkillListRelationFilter, { nullable: true })
  skills?: CompetitionSkillListRelationFilter;

  @Field(() => JobDescriptionRelationFilter, { nullable: true })
  @Type(() => JobDescriptionRelationFilter)
  job_description?: JobDescriptionRelationFilter;

  @Field(() => UserRelationFilter, { nullable: true })
  recruiter?: UserRelationFilter;

  @Field(() => CompetitionScheduleRelationFilter, { nullable: true })
  schedule?: CompetitionScheduleRelationFilter;
}
