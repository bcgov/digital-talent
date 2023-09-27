import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ApplicationLocationUpdateInput } from './application-location-update.input';
import { ApplicationLocationWhereUniqueInput } from './application-location-where-unique.input';

@ArgsType()
export class UpdateOneApplicationLocationArgs {
  @Field(() => ApplicationLocationUpdateInput, { nullable: false })
  @Type(() => ApplicationLocationUpdateInput)
  data!: ApplicationLocationUpdateInput;

  @Field(() => ApplicationLocationWhereUniqueInput, { nullable: false })
  @Type(() => ApplicationLocationWhereUniqueInput)
  where!: Prisma.AtLeast<ApplicationLocationWhereUniqueInput, 'application_id_location_id'>;
}
