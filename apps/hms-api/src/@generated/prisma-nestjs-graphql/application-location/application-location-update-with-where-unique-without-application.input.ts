import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ApplicationLocationWhereUniqueInput } from './application-location-where-unique.input';
import { ApplicationLocationUpdateWithoutApplicationInput } from './application-location-update-without-application.input';

@InputType()
export class ApplicationLocationUpdateWithWhereUniqueWithoutApplicationInput {
  @Field(() => ApplicationLocationWhereUniqueInput, { nullable: false })
  @Type(() => ApplicationLocationWhereUniqueInput)
  where!: Prisma.AtLeast<ApplicationLocationWhereUniqueInput, 'application_id_location_id'>;

  @Field(() => ApplicationLocationUpdateWithoutApplicationInput, { nullable: false })
  @Type(() => ApplicationLocationUpdateWithoutApplicationInput)
  data!: ApplicationLocationUpdateWithoutApplicationInput;
}
