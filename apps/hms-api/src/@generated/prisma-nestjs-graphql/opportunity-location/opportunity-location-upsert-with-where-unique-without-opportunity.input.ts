import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { OpportunityLocationWhereUniqueInput } from './opportunity-location-where-unique.input';
import { OpportunityLocationUpdateWithoutOpportunityInput } from './opportunity-location-update-without-opportunity.input';
import { OpportunityLocationCreateWithoutOpportunityInput } from './opportunity-location-create-without-opportunity.input';

@InputType()
export class OpportunityLocationUpsertWithWhereUniqueWithoutOpportunityInput {
  @Field(() => OpportunityLocationWhereUniqueInput, { nullable: false })
  @Type(() => OpportunityLocationWhereUniqueInput)
  where!: Prisma.AtLeast<OpportunityLocationWhereUniqueInput, 'opportunity_id_location_id'>;

  @Field(() => OpportunityLocationUpdateWithoutOpportunityInput, { nullable: false })
  @Type(() => OpportunityLocationUpdateWithoutOpportunityInput)
  update!: OpportunityLocationUpdateWithoutOpportunityInput;

  @Field(() => OpportunityLocationCreateWithoutOpportunityInput, { nullable: false })
  @Type(() => OpportunityLocationCreateWithoutOpportunityInput)
  create!: OpportunityLocationCreateWithoutOpportunityInput;
}
