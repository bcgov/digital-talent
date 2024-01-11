import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OpportunityLocationCreateWithoutLocationInput } from './opportunity-location-create-without-location.input';
import { OpportunityLocationCreateOrConnectWithoutLocationInput } from './opportunity-location-create-or-connect-without-location.input';
import { OpportunityLocationCreateManyLocationInputEnvelope } from './opportunity-location-create-many-location-input-envelope.input';
import { OpportunityLocationWhereUniqueInput } from './opportunity-location-where-unique.input';

@InputType()
export class OpportunityLocationCreateNestedManyWithoutLocationInput {
  @Field(() => [OpportunityLocationCreateWithoutLocationInput], { nullable: true })
  @Type(() => OpportunityLocationCreateWithoutLocationInput)
  create?: Array<OpportunityLocationCreateWithoutLocationInput>;

  @Field(() => [OpportunityLocationCreateOrConnectWithoutLocationInput], { nullable: true })
  @Type(() => OpportunityLocationCreateOrConnectWithoutLocationInput)
  connectOrCreate?: Array<OpportunityLocationCreateOrConnectWithoutLocationInput>;

  @Field(() => OpportunityLocationCreateManyLocationInputEnvelope, { nullable: true })
  @Type(() => OpportunityLocationCreateManyLocationInputEnvelope)
  createMany?: OpportunityLocationCreateManyLocationInputEnvelope;

  @Field(() => [OpportunityLocationWhereUniqueInput], { nullable: true })
  @Type(() => OpportunityLocationWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<OpportunityLocationWhereUniqueInput, 'opportunity_id_location_id'>>;
}
