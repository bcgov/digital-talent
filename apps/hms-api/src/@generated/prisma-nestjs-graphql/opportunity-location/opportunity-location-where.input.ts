import { Field, InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { LocationRelationFilter } from '../location/location-relation-filter.input';
import { OpportunityRelationFilter } from '../opportunity/opportunity-relation-filter.input';

@InputType()
export class OpportunityLocationWhereInput {
  @Field(() => [OpportunityLocationWhereInput], { nullable: true })
  AND?: Array<OpportunityLocationWhereInput>;

  @Field(() => [OpportunityLocationWhereInput], { nullable: true })
  OR?: Array<OpportunityLocationWhereInput>;

  @Field(() => [OpportunityLocationWhereInput], { nullable: true })
  NOT?: Array<OpportunityLocationWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  location_id?: UuidFilter;

  @Field(() => UuidFilter, { nullable: true })
  opportunity_id?: UuidFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  deleted_at?: DateTimeFilter;

  @Field(() => LocationRelationFilter, { nullable: true })
  location?: LocationRelationFilter;

  @Field(() => OpportunityRelationFilter, { nullable: true })
  opportunity?: OpportunityRelationFilter;
}
