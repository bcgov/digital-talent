import { Field, InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { JsonListFilter } from '../prisma/json-list-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class GridScalarWhereWithAggregatesInput {
  @Field(() => [GridScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<GridScalarWhereWithAggregatesInput>;

  @Field(() => [GridScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<GridScalarWhereWithAggregatesInput>;

  @Field(() => [GridScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<GridScalarWhereWithAggregatesInput>;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  id?: UuidWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter;

  @Field(() => JsonListFilter, { nullable: true })
  steps?: JsonListFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  created_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updated_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  deleted_at?: DateTimeWithAggregatesFilter;
}
