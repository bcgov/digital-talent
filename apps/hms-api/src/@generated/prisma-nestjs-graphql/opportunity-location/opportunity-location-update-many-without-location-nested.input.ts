import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OpportunityLocationCreateWithoutLocationInput } from './opportunity-location-create-without-location.input';
import { OpportunityLocationCreateOrConnectWithoutLocationInput } from './opportunity-location-create-or-connect-without-location.input';
import { OpportunityLocationUpsertWithWhereUniqueWithoutLocationInput } from './opportunity-location-upsert-with-where-unique-without-location.input';
import { OpportunityLocationCreateManyLocationInputEnvelope } from './opportunity-location-create-many-location-input-envelope.input';
import { OpportunityLocationWhereUniqueInput } from './opportunity-location-where-unique.input';
import { OpportunityLocationUpdateWithWhereUniqueWithoutLocationInput } from './opportunity-location-update-with-where-unique-without-location.input';
import { OpportunityLocationUpdateManyWithWhereWithoutLocationInput } from './opportunity-location-update-many-with-where-without-location.input';
import { OpportunityLocationScalarWhereInput } from './opportunity-location-scalar-where.input';

@InputType()
export class OpportunityLocationUpdateManyWithoutLocationNestedInput {
  @Field(() => [OpportunityLocationCreateWithoutLocationInput], { nullable: true })
  @Type(() => OpportunityLocationCreateWithoutLocationInput)
  create?: Array<OpportunityLocationCreateWithoutLocationInput>;

  @Field(() => [OpportunityLocationCreateOrConnectWithoutLocationInput], { nullable: true })
  @Type(() => OpportunityLocationCreateOrConnectWithoutLocationInput)
  connectOrCreate?: Array<OpportunityLocationCreateOrConnectWithoutLocationInput>;

  @Field(() => [OpportunityLocationUpsertWithWhereUniqueWithoutLocationInput], { nullable: true })
  @Type(() => OpportunityLocationUpsertWithWhereUniqueWithoutLocationInput)
  upsert?: Array<OpportunityLocationUpsertWithWhereUniqueWithoutLocationInput>;

  @Field(() => OpportunityLocationCreateManyLocationInputEnvelope, { nullable: true })
  @Type(() => OpportunityLocationCreateManyLocationInputEnvelope)
  createMany?: OpportunityLocationCreateManyLocationInputEnvelope;

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

  @Field(() => [OpportunityLocationUpdateWithWhereUniqueWithoutLocationInput], { nullable: true })
  @Type(() => OpportunityLocationUpdateWithWhereUniqueWithoutLocationInput)
  update?: Array<OpportunityLocationUpdateWithWhereUniqueWithoutLocationInput>;

  @Field(() => [OpportunityLocationUpdateManyWithWhereWithoutLocationInput], { nullable: true })
  @Type(() => OpportunityLocationUpdateManyWithWhereWithoutLocationInput)
  updateMany?: Array<OpportunityLocationUpdateManyWithWhereWithoutLocationInput>;

  @Field(() => [OpportunityLocationScalarWhereInput], { nullable: true })
  @Type(() => OpportunityLocationScalarWhereInput)
  deleteMany?: Array<OpportunityLocationScalarWhereInput>;
}
