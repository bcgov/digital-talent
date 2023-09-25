import { Field, InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class OpportunitySkillScalarWhereWithAggregatesInput {
  @Field(() => [OpportunitySkillScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<OpportunitySkillScalarWhereWithAggregatesInput>;

  @Field(() => [OpportunitySkillScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<OpportunitySkillScalarWhereWithAggregatesInput>;

  @Field(() => [OpportunitySkillScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<OpportunitySkillScalarWhereWithAggregatesInput>;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  opportunity_id?: UuidWithAggregatesFilter;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  skill_id?: UuidWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  created_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  deleted_at?: DateTimeWithAggregatesFilter;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  opportunityId?: UuidWithAggregatesFilter;
}
