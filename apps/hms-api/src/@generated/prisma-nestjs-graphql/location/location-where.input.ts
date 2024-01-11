import { Field, InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { EnumLocationRegionFilter } from '../prisma/enum-location-region-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ApplicationLocationListRelationFilter } from '../application-location/application-location-list-relation-filter.input';
import { OpportunityLocationListRelationFilter } from '../opportunity-location/opportunity-location-list-relation-filter.input';

@InputType()
export class LocationWhereInput {
  @Field(() => [LocationWhereInput], { nullable: true })
  AND?: Array<LocationWhereInput>;

  @Field(() => [LocationWhereInput], { nullable: true })
  OR?: Array<LocationWhereInput>;

  @Field(() => [LocationWhereInput], { nullable: true })
  NOT?: Array<LocationWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  id?: UuidFilter;

  @Field(() => StringFilter, { nullable: true })
  deltek_id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  postal_code?: StringFilter;

  @Field(() => FloatFilter, { nullable: true })
  lat?: FloatFilter;

  @Field(() => FloatFilter, { nullable: true })
  lon?: FloatFilter;

  @Field(() => EnumLocationRegionFilter, { nullable: true })
  region?: EnumLocationRegionFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  deleted_at?: DateTimeFilter;

  @Field(() => ApplicationLocationListRelationFilter, { nullable: true })
  applications?: ApplicationLocationListRelationFilter;

  @Field(() => OpportunityLocationListRelationFilter, { nullable: true })
  opportunities?: OpportunityLocationListRelationFilter;
}
