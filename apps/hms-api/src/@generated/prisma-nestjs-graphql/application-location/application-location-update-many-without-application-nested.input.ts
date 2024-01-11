import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ApplicationLocationCreateWithoutApplicationInput } from './application-location-create-without-application.input';
import { ApplicationLocationCreateOrConnectWithoutApplicationInput } from './application-location-create-or-connect-without-application.input';
import { ApplicationLocationUpsertWithWhereUniqueWithoutApplicationInput } from './application-location-upsert-with-where-unique-without-application.input';
import { ApplicationLocationCreateManyApplicationInputEnvelope } from './application-location-create-many-application-input-envelope.input';
import { ApplicationLocationWhereUniqueInput } from './application-location-where-unique.input';
import { ApplicationLocationUpdateWithWhereUniqueWithoutApplicationInput } from './application-location-update-with-where-unique-without-application.input';
import { ApplicationLocationUpdateManyWithWhereWithoutApplicationInput } from './application-location-update-many-with-where-without-application.input';
import { ApplicationLocationScalarWhereInput } from './application-location-scalar-where.input';

@InputType()
export class ApplicationLocationUpdateManyWithoutApplicationNestedInput {
  @Field(() => [ApplicationLocationCreateWithoutApplicationInput], { nullable: true })
  @Type(() => ApplicationLocationCreateWithoutApplicationInput)
  create?: Array<ApplicationLocationCreateWithoutApplicationInput>;

  @Field(() => [ApplicationLocationCreateOrConnectWithoutApplicationInput], { nullable: true })
  @Type(() => ApplicationLocationCreateOrConnectWithoutApplicationInput)
  connectOrCreate?: Array<ApplicationLocationCreateOrConnectWithoutApplicationInput>;

  @Field(() => [ApplicationLocationUpsertWithWhereUniqueWithoutApplicationInput], { nullable: true })
  @Type(() => ApplicationLocationUpsertWithWhereUniqueWithoutApplicationInput)
  upsert?: Array<ApplicationLocationUpsertWithWhereUniqueWithoutApplicationInput>;

  @Field(() => ApplicationLocationCreateManyApplicationInputEnvelope, { nullable: true })
  @Type(() => ApplicationLocationCreateManyApplicationInputEnvelope)
  createMany?: ApplicationLocationCreateManyApplicationInputEnvelope;

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

  @Field(() => [ApplicationLocationUpdateWithWhereUniqueWithoutApplicationInput], { nullable: true })
  @Type(() => ApplicationLocationUpdateWithWhereUniqueWithoutApplicationInput)
  update?: Array<ApplicationLocationUpdateWithWhereUniqueWithoutApplicationInput>;

  @Field(() => [ApplicationLocationUpdateManyWithWhereWithoutApplicationInput], { nullable: true })
  @Type(() => ApplicationLocationUpdateManyWithWhereWithoutApplicationInput)
  updateMany?: Array<ApplicationLocationUpdateManyWithWhereWithoutApplicationInput>;

  @Field(() => [ApplicationLocationScalarWhereInput], { nullable: true })
  @Type(() => ApplicationLocationScalarWhereInput)
  deleteMany?: Array<ApplicationLocationScalarWhereInput>;
}
