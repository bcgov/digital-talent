import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ApplicationLocationCreateWithoutLocationInput } from './application-location-create-without-location.input';
import { ApplicationLocationCreateOrConnectWithoutLocationInput } from './application-location-create-or-connect-without-location.input';
import { ApplicationLocationUpsertWithWhereUniqueWithoutLocationInput } from './application-location-upsert-with-where-unique-without-location.input';
import { ApplicationLocationCreateManyLocationInputEnvelope } from './application-location-create-many-location-input-envelope.input';
import { ApplicationLocationWhereUniqueInput } from './application-location-where-unique.input';
import { ApplicationLocationUpdateWithWhereUniqueWithoutLocationInput } from './application-location-update-with-where-unique-without-location.input';
import { ApplicationLocationUpdateManyWithWhereWithoutLocationInput } from './application-location-update-many-with-where-without-location.input';
import { ApplicationLocationScalarWhereInput } from './application-location-scalar-where.input';

@InputType()
export class ApplicationLocationUpdateManyWithoutLocationNestedInput {
  @Field(() => [ApplicationLocationCreateWithoutLocationInput], { nullable: true })
  @Type(() => ApplicationLocationCreateWithoutLocationInput)
  create?: Array<ApplicationLocationCreateWithoutLocationInput>;

  @Field(() => [ApplicationLocationCreateOrConnectWithoutLocationInput], { nullable: true })
  @Type(() => ApplicationLocationCreateOrConnectWithoutLocationInput)
  connectOrCreate?: Array<ApplicationLocationCreateOrConnectWithoutLocationInput>;

  @Field(() => [ApplicationLocationUpsertWithWhereUniqueWithoutLocationInput], { nullable: true })
  @Type(() => ApplicationLocationUpsertWithWhereUniqueWithoutLocationInput)
  upsert?: Array<ApplicationLocationUpsertWithWhereUniqueWithoutLocationInput>;

  @Field(() => ApplicationLocationCreateManyLocationInputEnvelope, { nullable: true })
  @Type(() => ApplicationLocationCreateManyLocationInputEnvelope)
  createMany?: ApplicationLocationCreateManyLocationInputEnvelope;

  @Field(() => [ApplicationLocationWhereUniqueInput], { nullable: true })
  @Type(() => ApplicationLocationWhereUniqueInput)
  set?: Array<Prisma.AtLeast<ApplicationLocationWhereUniqueInput, 'application_id_location_id'>>;

  @Field(() => [ApplicationLocationWhereUniqueInput], { nullable: true })
  @Type(() => ApplicationLocationWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<ApplicationLocationWhereUniqueInput, 'application_id_location_id'>>;

  @Field(() => [ApplicationLocationWhereUniqueInput], { nullable: true })
  @Type(() => ApplicationLocationWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<ApplicationLocationWhereUniqueInput, 'application_id_location_id'>>;

  @Field(() => [ApplicationLocationWhereUniqueInput], { nullable: true })
  @Type(() => ApplicationLocationWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ApplicationLocationWhereUniqueInput, 'application_id_location_id'>>;

  @Field(() => [ApplicationLocationUpdateWithWhereUniqueWithoutLocationInput], { nullable: true })
  @Type(() => ApplicationLocationUpdateWithWhereUniqueWithoutLocationInput)
  update?: Array<ApplicationLocationUpdateWithWhereUniqueWithoutLocationInput>;

  @Field(() => [ApplicationLocationUpdateManyWithWhereWithoutLocationInput], { nullable: true })
  @Type(() => ApplicationLocationUpdateManyWithWhereWithoutLocationInput)
  updateMany?: Array<ApplicationLocationUpdateManyWithWhereWithoutLocationInput>;

  @Field(() => [ApplicationLocationScalarWhereInput], { nullable: true })
  @Type(() => ApplicationLocationScalarWhereInput)
  deleteMany?: Array<ApplicationLocationScalarWhereInput>;
}
