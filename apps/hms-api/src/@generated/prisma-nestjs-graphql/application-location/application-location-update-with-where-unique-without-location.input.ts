import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ApplicationLocationWhereUniqueInput } from './application-location-where-unique.input';
import { ApplicationLocationUpdateWithoutLocationInput } from './application-location-update-without-location.input';

@InputType()
export class ApplicationLocationUpdateWithWhereUniqueWithoutLocationInput {
  @Field(() => ApplicationLocationWhereUniqueInput, { nullable: false })
  @Type(() => ApplicationLocationWhereUniqueInput)
  where!: Prisma.AtLeast<ApplicationLocationWhereUniqueInput, 'application_id_location_id'>;

  @Field(() => ApplicationLocationUpdateWithoutLocationInput, { nullable: false })
  @Type(() => ApplicationLocationUpdateWithoutLocationInput)
  data!: ApplicationLocationUpdateWithoutLocationInput;
}
