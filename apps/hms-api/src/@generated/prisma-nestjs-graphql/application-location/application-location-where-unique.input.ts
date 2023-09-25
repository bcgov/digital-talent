import { Field, InputType } from '@nestjs/graphql';
import { ApplicationLocationApplication_idLocation_idCompoundUniqueInput } from './application-location-application-id-location-id-compound-unique.input';
import { ApplicationLocationWhereInput } from './application-location-where.input';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ApplicationRelationFilter } from '../application/application-relation-filter.input';
import { LocationRelationFilter } from '../location/location-relation-filter.input';

@InputType()
export class ApplicationLocationWhereUniqueInput {
  @Field(() => ApplicationLocationApplication_idLocation_idCompoundUniqueInput, { nullable: true })
  application_id_location_id?: ApplicationLocationApplication_idLocation_idCompoundUniqueInput;

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
