import { Field, InputType } from '@nestjs/graphql';
import { OpportunityLocationOpportunity_idLocation_idCompoundUniqueInput } from './opportunity-location-opportunity-id-location-id-compound-unique.input';
import { OpportunityLocationWhereInput } from './opportunity-location-where.input';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { LocationRelationFilter } from '../location/location-relation-filter.input';
import { OpportunityRelationFilter } from '../opportunity/opportunity-relation-filter.input';

@InputType()
export class OpportunityLocationWhereUniqueInput {
  @Field(() => OpportunityLocationOpportunity_idLocation_idCompoundUniqueInput, { nullable: true })
  opportunity_id_location_id?: OpportunityLocationOpportunity_idLocation_idCompoundUniqueInput;

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
