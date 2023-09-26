import { Field, InputType } from '@nestjs/graphql';
import { SkillWhereInput } from './skill-where.input';
import { EnumSkillCategoryFilter } from '../prisma/enum-skill-category-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ApplicationSkillListRelationFilter } from '../application-skill/application-skill-list-relation-filter.input';
import { CompetitionSkillListRelationFilter } from '../competition-skill/competition-skill-list-relation-filter.input';
import { OpportunitySkillListRelationFilter } from '../opportunity-skill/opportunity-skill-list-relation-filter.input';

@InputType()
export class SkillWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => [SkillWhereInput], { nullable: true })
  AND?: Array<SkillWhereInput>;

  @Field(() => [SkillWhereInput], { nullable: true })
  OR?: Array<SkillWhereInput>;

  @Field(() => [SkillWhereInput], { nullable: true })
  NOT?: Array<SkillWhereInput>;

  @Field(() => EnumSkillCategoryFilter, { nullable: true })
  category?: EnumSkillCategoryFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  description?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  deleted_at?: DateTimeFilter;

  @Field(() => ApplicationSkillListRelationFilter, { nullable: true })
  applications?: ApplicationSkillListRelationFilter;

  @Field(() => CompetitionSkillListRelationFilter, { nullable: true })
  competitions?: CompetitionSkillListRelationFilter;

  @Field(() => OpportunitySkillListRelationFilter, { nullable: true })
  opportunities?: OpportunitySkillListRelationFilter;
}
