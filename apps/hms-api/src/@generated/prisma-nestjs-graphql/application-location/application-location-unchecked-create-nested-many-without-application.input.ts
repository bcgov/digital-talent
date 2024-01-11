import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ApplicationLocationCreateWithoutApplicationInput } from './application-location-create-without-application.input';
import { ApplicationLocationCreateOrConnectWithoutApplicationInput } from './application-location-create-or-connect-without-application.input';
import { ApplicationLocationCreateManyApplicationInputEnvelope } from './application-location-create-many-application-input-envelope.input';
import { ApplicationLocationWhereUniqueInput } from './application-location-where-unique.input';

@InputType()
export class ApplicationLocationUncheckedCreateNestedManyWithoutApplicationInput {
  @Field(() => [ApplicationLocationCreateWithoutApplicationInput], { nullable: true })
  @Type(() => ApplicationLocationCreateWithoutApplicationInput)
  create?: Array<ApplicationLocationCreateWithoutApplicationInput>;

  @Field(() => [ApplicationLocationCreateOrConnectWithoutApplicationInput], { nullable: true })
  @Type(() => ApplicationLocationCreateOrConnectWithoutApplicationInput)
  connectOrCreate?: Array<ApplicationLocationCreateOrConnectWithoutApplicationInput>;

  @Field(() => ApplicationLocationCreateManyApplicationInputEnvelope, { nullable: true })
  @Type(() => ApplicationLocationCreateManyApplicationInputEnvelope)
  createMany?: ApplicationLocationCreateManyApplicationInputEnvelope;

  @Field(() => [ApplicationLocationWhereUniqueInput], { nullable: true })
  @Type(() => ApplicationLocationWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ApplicationLocationWhereUniqueInput, 'application_id_location_id'>>;
}
