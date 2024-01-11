import { Field, InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumOpportunityStateFilter } from '../prisma/enum-opportunity-state-filter.input';
import { EnumOpportunityInvolvementFilter } from '../prisma/enum-opportunity-involvement-filter.input';
import { EnumWorkOptionFilter } from '../prisma/enum-work-option-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class OpportunityScalarWhereInput {
  @Field(() => [OpportunityScalarWhereInput], { nullable: true })
  AND?: Array<OpportunityScalarWhereInput>;

  @Field(() => [OpportunityScalarWhereInput], { nullable: true })
  OR?: Array<OpportunityScalarWhereInput>;

  @Field(() => [OpportunityScalarWhereInput], { nullable: true })
  NOT?: Array<OpportunityScalarWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  id?: UuidFilter;

  @Field(() => UuidFilter, { nullable: true })
  competition_id?: UuidFilter;

  @Field(() => StringFilter, { nullable: true })
  deltek_id?: StringFilter;

  @Field(() => UuidFilter, { nullable: true })
  hiring_manager_id?: UuidFilter;

  @Field(() => UuidFilter, { nullable: true })
  ministry_id?: UuidFilter;

  @Field(() => EnumOpportunityStateFilter, { nullable: true })
  state?: EnumOpportunityStateFilter;

  @Field(() => EnumOpportunityInvolvementFilter, { nullable: true })
  involvement?: EnumOpportunityInvolvementFilter;

  @Field(() => EnumWorkOptionFilter, { nullable: true })
  work_option?: EnumWorkOptionFilter;

  @Field(() => StringFilter, { nullable: true })
  description?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  candidate_description?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  team_name?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  team_description?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  work_examples?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  deleted_at?: DateTimeFilter;
}
