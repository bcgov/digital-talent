import { Field, InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class OpportunityLocationScalarWhereWithAggregatesInput {
  @Field(() => [OpportunityLocationScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<OpportunityLocationScalarWhereWithAggregatesInput>;

  @Field(() => [OpportunityLocationScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<OpportunityLocationScalarWhereWithAggregatesInput>;

  @Field(() => [OpportunityLocationScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<OpportunityLocationScalarWhereWithAggregatesInput>;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  location_id?: UuidWithAggregatesFilter;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  opportunity_id?: UuidWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  created_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  deleted_at?: DateTimeWithAggregatesFilter;
}
