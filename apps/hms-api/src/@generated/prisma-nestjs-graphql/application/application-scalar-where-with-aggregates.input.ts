import { Field, InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';

@InputType()
export class ApplicationScalarWhereWithAggregatesInput {
  @Field(() => [ApplicationScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<ApplicationScalarWhereWithAggregatesInput>;

  @Field(() => [ApplicationScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<ApplicationScalarWhereWithAggregatesInput>;

  @Field(() => [ApplicationScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<ApplicationScalarWhereWithAggregatesInput>;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  id?: UuidWithAggregatesFilter;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  applicant_id?: UuidWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  created_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updated_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  deleted_at?: DateTimeWithAggregatesFilter;

  @Field(() => JsonWithAggregatesFilter, { nullable: true })
  json?: JsonWithAggregatesFilter;
}
