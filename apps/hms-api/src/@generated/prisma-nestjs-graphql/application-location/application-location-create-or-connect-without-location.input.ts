import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ApplicationLocationWhereUniqueInput } from './application-location-where-unique.input';
import { ApplicationLocationCreateWithoutLocationInput } from './application-location-create-without-location.input';

@InputType()
export class ApplicationLocationCreateOrConnectWithoutLocationInput {
  @Field(() => ApplicationLocationWhereUniqueInput, { nullable: false })
  @Type(() => ApplicationLocationWhereUniqueInput)
  where!: Prisma.AtLeast<ApplicationLocationWhereUniqueInput, 'application_id_location_id'>;

  @Field(() => ApplicationLocationCreateWithoutLocationInput, { nullable: false })
  @Type(() => ApplicationLocationCreateWithoutLocationInput)
  create!: ApplicationLocationCreateWithoutLocationInput;
}
