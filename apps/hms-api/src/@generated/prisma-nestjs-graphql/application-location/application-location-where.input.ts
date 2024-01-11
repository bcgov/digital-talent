import { Field, InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ApplicationRelationFilter } from '../application/application-relation-filter.input';
import { LocationRelationFilter } from '../location/location-relation-filter.input';

@InputType()
export class ApplicationLocationWhereInput {
  @Field(() => [ApplicationLocationWhereInput], { nullable: true })
  AND?: Array<ApplicationLocationWhereInput>;

  @Field(() => [ApplicationLocationWhereInput], { nullable: true })
  OR?: Array<ApplicationLocationWhereInput>;

  @Field(() => [ApplicationLocationWhereInput], { nullable: true })
  NOT?: Array<ApplicationLocationWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  application_id?: UuidFilter;

  @Field(() => UuidFilter, { nullable: true })
  location_id?: UuidFilter;

  @Field(() => IntFilter, { nullable: true })
  rank?: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  deleted_at?: DateTimeFilter;

  @Field(() => ApplicationRelationFilter, { nullable: true })
  application?: ApplicationRelationFilter;

  @Field(() => LocationRelationFilter, { nullable: true })
  location?: LocationRelationFilter;
}
