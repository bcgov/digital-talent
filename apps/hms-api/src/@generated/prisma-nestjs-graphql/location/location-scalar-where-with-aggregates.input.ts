import { Field, InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { EnumLocationRegionWithAggregatesFilter } from '../prisma/enum-location-region-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class LocationScalarWhereWithAggregatesInput {
  @Field(() => [LocationScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<LocationScalarWhereWithAggregatesInput>;

  @Field(() => [LocationScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<LocationScalarWhereWithAggregatesInput>;

  @Field(() => [LocationScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<LocationScalarWhereWithAggregatesInput>;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  id?: UuidWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  deltek_id?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  postal_code?: StringWithAggregatesFilter;

  @Field(() => FloatWithAggregatesFilter, { nullable: true })
  lat?: FloatWithAggregatesFilter;

  @Field(() => FloatWithAggregatesFilter, { nullable: true })
  lon?: FloatWithAggregatesFilter;

  @Field(() => EnumLocationRegionWithAggregatesFilter, { nullable: true })
  region?: EnumLocationRegionWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  created_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updated_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  deleted_at?: DateTimeWithAggregatesFilter;
}
