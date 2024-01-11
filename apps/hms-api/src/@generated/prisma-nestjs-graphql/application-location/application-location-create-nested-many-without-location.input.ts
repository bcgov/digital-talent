import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ApplicationLocationCreateWithoutLocationInput } from './application-location-create-without-location.input';
import { ApplicationLocationCreateOrConnectWithoutLocationInput } from './application-location-create-or-connect-without-location.input';
import { ApplicationLocationCreateManyLocationInputEnvelope } from './application-location-create-many-location-input-envelope.input';
import { ApplicationLocationWhereUniqueInput } from './application-location-where-unique.input';

@InputType()
export class ApplicationLocationCreateNestedManyWithoutLocationInput {
  @Field(() => [ApplicationLocationCreateWithoutLocationInput], { nullable: true })
  @Type(() => ApplicationLocationCreateWithoutLocationInput)
  create?: Array<ApplicationLocationCreateWithoutLocationInput>;

  @Field(() => [ApplicationLocationCreateOrConnectWithoutLocationInput], { nullable: true })
  @Type(() => ApplicationLocationCreateOrConnectWithoutLocationInput)
  connectOrCreate?: Array<ApplicationLocationCreateOrConnectWithoutLocationInput>;

  @Field(() => ApplicationLocationCreateManyLocationInputEnvelope, { nullable: true })
  @Type(() => ApplicationLocationCreateManyLocationInputEnvelope)
  createMany?: ApplicationLocationCreateManyLocationInputEnvelope;

  @Field(() => [ApplicationLocationWhereUniqueInput], { nullable: true })
  @Type(() => ApplicationLocationWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ApplicationLocationWhereUniqueInput, 'application_id_location_id'>>;
}
