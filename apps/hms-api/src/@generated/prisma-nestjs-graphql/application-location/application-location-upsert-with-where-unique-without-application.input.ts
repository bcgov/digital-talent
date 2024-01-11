import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ApplicationLocationWhereUniqueInput } from './application-location-where-unique.input';
import { ApplicationLocationUpdateWithoutApplicationInput } from './application-location-update-without-application.input';
import { ApplicationLocationCreateWithoutApplicationInput } from './application-location-create-without-application.input';

@InputType()
export class ApplicationLocationUpsertWithWhereUniqueWithoutApplicationInput {
  @Field(() => ApplicationLocationWhereUniqueInput, { nullable: false })
  @Type(() => ApplicationLocationWhereUniqueInput)
  where!: Prisma.AtLeast<ApplicationLocationWhereUniqueInput, 'application_id_location_id'>;

  @Field(() => ApplicationLocationUpdateWithoutApplicationInput, { nullable: false })
  @Type(() => ApplicationLocationUpdateWithoutApplicationInput)
  update!: ApplicationLocationUpdateWithoutApplicationInput;

  @Field(() => ApplicationLocationCreateWithoutApplicationInput, { nullable: false })
  @Type(() => ApplicationLocationCreateWithoutApplicationInput)
  create!: ApplicationLocationCreateWithoutApplicationInput;
}
