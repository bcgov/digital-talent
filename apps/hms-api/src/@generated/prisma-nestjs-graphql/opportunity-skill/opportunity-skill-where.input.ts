import { Field, InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { OpportunityRelationFilter } from '../opportunity/opportunity-relation-filter.input';
import { SkillRelationFilter } from '../skill/skill-relation-filter.input';

@InputType()
export class OpportunitySkillWhereInput {
  @Field(() => [OpportunitySkillWhereInput], { nullable: true })
  AND?: Array<OpportunitySkillWhereInput>;

  @Field(() => [OpportunitySkillWhereInput], { nullable: true })
  OR?: Array<OpportunitySkillWhereInput>;

  @Field(() => [OpportunitySkillWhereInput], { nullable: true })
  NOT?: Array<OpportunitySkillWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  opportunity_id?: UuidFilter;

  @Field(() => UuidFilter, { nullable: true })
  skill_id?: UuidFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  deleted_at?: DateTimeFilter;

  @Field(() => OpportunityRelationFilter, { nullable: true })
  opportunity?: OpportunityRelationFilter;

  @Field(() => SkillRelationFilter, { nullable: true })
  skill?: SkillRelationFilter;
}
