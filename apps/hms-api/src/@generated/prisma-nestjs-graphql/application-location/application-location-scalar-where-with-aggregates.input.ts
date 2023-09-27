import { Field, InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ApplicationLocationScalarWhereWithAggregatesInput {
  @Field(() => [ApplicationLocationScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<ApplicationLocationScalarWhereWithAggregatesInput>;

  @Field(() => [ApplicationLocationScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<ApplicationLocationScalarWhereWithAggregatesInput>;

  @Field(() => [ApplicationLocationScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<ApplicationLocationScalarWhereWithAggregatesInput>;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  application_id?: UuidWithAggregatesFilter;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  location_id?: UuidWithAggregatesFilter;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  rank?: IntWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  created_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updated_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  deleted_at?: DateTimeWithAggregatesFilter;
}
