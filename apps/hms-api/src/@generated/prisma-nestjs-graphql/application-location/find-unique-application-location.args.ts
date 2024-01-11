import { Field, ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ApplicationLocationWhereUniqueInput } from './application-location-where-unique.input';

@ArgsType()
export class FindUniqueApplicationLocationArgs {
  @Field(() => ApplicationLocationWhereUniqueInput, { nullable: false })
  @Type(() => ApplicationLocationWhereUniqueInput)
  where!: Prisma.AtLeast<ApplicationLocationWhereUniqueInput, 'application_id_location_id'>;
}
