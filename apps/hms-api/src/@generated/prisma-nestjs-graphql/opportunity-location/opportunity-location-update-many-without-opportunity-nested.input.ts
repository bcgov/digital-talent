import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OpportunityLocationCreateWithoutOpportunityInput } from './opportunity-location-create-without-opportunity.input';
import { OpportunityLocationCreateOrConnectWithoutOpportunityInput } from './opportunity-location-create-or-connect-without-opportunity.input';
import { OpportunityLocationUpsertWithWhereUniqueWithoutOpportunityInput } from './opportunity-location-upsert-with-where-unique-without-opportunity.input';
import { OpportunityLocationCreateManyOpportunityInputEnvelope } from './opportunity-location-create-many-opportunity-input-envelope.input';
import { OpportunityLocationWhereUniqueInput } from './opportunity-location-where-unique.input';
import { OpportunityLocationUpdateWithWhereUniqueWithoutOpportunityInput } from './opportunity-location-update-with-where-unique-without-opportunity.input';
import { OpportunityLocationUpdateManyWithWhereWithoutOpportunityInput } from './opportunity-location-update-many-with-where-without-opportunity.input';
import { OpportunityLocationScalarWhereInput } from './opportunity-location-scalar-where.input';

@InputType()
export class OpportunityLocationUpdateManyWithoutOpportunityNestedInput {
  @Field(() => [OpportunityLocationCreateWithoutOpportunityInput], { nullable: true })
  @Type(() => OpportunityLocationCreateWithoutOpportunityInput)
  create?: Array<OpportunityLocationCreateWithoutOpportunityInput>;

  @Field(() => [OpportunityLocationCreateOrConnectWithoutOpportunityInput], { nullable: true })
  @Type(() => OpportunityLocationCreateOrConnectWithoutOpportunityInput)
  connectOrCreate?: Array<OpportunityLocationCreateOrConnectWithoutOpportunityInput>;

  @Field(() => [OpportunityLocationUpsertWithWhereUniqueWithoutOpportunityInput], { nullable: true })
  @Type(() => OpportunityLocationUpsertWithWhereUniqueWithoutOpportunityInput)
  upsert?: Array<OpportunityLocationUpsertWithWhereUniqueWithoutOpportunityInput>;

  @Field(() => OpportunityLocationCreateManyOpportunityInputEnvelope, { nullable: true })
  @Type(() => OpportunityLocationCreateManyOpportunityInputEnvelope)
  createMany?: OpportunityLocationCreateManyOpportunityInputEnvelope;

  @Field(() => [OpportunityLocationWhereUniqueInput], { nullable: true })
  @Type(() => OpportunityLocationWhereUniqueInput)
  set?: Array<Prisma.AtLeast<OpportunityLocationWhereUniqueInput, 'opportunity_id_location_id'>>;

  @Field(() => [OpportunityLocationWhereUniqueInput], { nullable: true })
  @Type(() => OpportunityLocationWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<OpportunityLocationWhereUniqueInput, 'opportunity_id_location_id'>>;

  @Field(() => [OpportunityLocationWhereUniqueInput], { nullable: true })
  @Type(() => OpportunityLocationWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<OpportunityLocationWhereUniqueInput, 'opportunity_id_location_id'>>;

  @Field(() => [OpportunityLocationWhereUniqueInput], { nullable: true })
  @Type(() => OpportunityLocationWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<OpportunityLocationWhereUniqueInput, 'opportunity_id_location_id'>>;

  @Field(() => [OpportunityLocationUpdateWithWhereUniqueWithoutOpportunityInput], { nullable: true })
  @Type(() => OpportunityLocationUpdateWithWhereUniqueWithoutOpportunityInput)
  update?: Array<OpportunityLocationUpdateWithWhereUniqueWithoutOpportunityInput>;

  @Field(() => [OpportunityLocationUpdateManyWithWhereWithoutOpportunityInput], { nullable: true })
  @Type(() => OpportunityLocationUpdateManyWithWhereWithoutOpportunityInput)
  updateMany?: Array<OpportunityLocationUpdateManyWithWhereWithoutOpportunityInput>;

  @Field(() => [OpportunityLocationScalarWhereInput], { nullable: true })
  @Type(() => OpportunityLocationScalarWhereInput)
  deleteMany?: Array<OpportunityLocationScalarWhereInput>;
}
