import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OpportunityLocationCreateWithoutOpportunityInput } from './opportunity-location-create-without-opportunity.input';
import { OpportunityLocationCreateOrConnectWithoutOpportunityInput } from './opportunity-location-create-or-connect-without-opportunity.input';
import { OpportunityLocationCreateManyOpportunityInputEnvelope } from './opportunity-location-create-many-opportunity-input-envelope.input';
import { OpportunityLocationWhereUniqueInput } from './opportunity-location-where-unique.input';

@InputType()
export class OpportunityLocationCreateNestedManyWithoutOpportunityInput {
  @Field(() => [OpportunityLocationCreateWithoutOpportunityInput], { nullable: true })
  @Type(() => OpportunityLocationCreateWithoutOpportunityInput)
  create?: Array<OpportunityLocationCreateWithoutOpportunityInput>;

  @Field(() => [OpportunityLocationCreateOrConnectWithoutOpportunityInput], { nullable: true })
  @Type(() => OpportunityLocationCreateOrConnectWithoutOpportunityInput)
  connectOrCreate?: Array<OpportunityLocationCreateOrConnectWithoutOpportunityInput>;

  @Field(() => OpportunityLocationCreateManyOpportunityInputEnvelope, { nullable: true })
  @Type(() => OpportunityLocationCreateManyOpportunityInputEnvelope)
  createMany?: OpportunityLocationCreateManyOpportunityInputEnvelope;

  @Field(() => [OpportunityLocationWhereUniqueInput], { nullable: true })
  @Type(() => OpportunityLocationWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<OpportunityLocationWhereUniqueInput, 'opportunity_id_location_id'>>;
}
