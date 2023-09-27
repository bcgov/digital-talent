import { Field, InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class OccupationGroupScalarWhereWithAggregatesInput {
  @Field(() => [OccupationGroupScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<OccupationGroupScalarWhereWithAggregatesInput>;

  @Field(() => [OccupationGroupScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<OccupationGroupScalarWhereWithAggregatesInput>;

  @Field(() => [OccupationGroupScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<OccupationGroupScalarWhereWithAggregatesInput>;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  id?: UuidWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  code?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  created_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updated_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  deleted_at?: DateTimeWithAggregatesFilter;
}
