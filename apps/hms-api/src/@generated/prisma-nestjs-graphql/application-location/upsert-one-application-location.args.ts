import { Field, ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ApplicationLocationWhereUniqueInput } from './application-location-where-unique.input';
import { ApplicationLocationCreateInput } from './application-location-create.input';
import { ApplicationLocationUpdateInput } from './application-location-update.input';

@ArgsType()
export class UpsertOneApplicationLocationArgs {
  @Field(() => ApplicationLocationWhereUniqueInput, { nullable: false })
  @Type(() => ApplicationLocationWhereUniqueInput)
  where!: Prisma.AtLeast<ApplicationLocationWhereUniqueInput, 'application_id_location_id'>;

  @Field(() => ApplicationLocationCreateInput, { nullable: false })
  @Type(() => ApplicationLocationCreateInput)
  create!: ApplicationLocationCreateInput;

  @Field(() => ApplicationLocationUpdateInput, { nullable: false })
  @Type(() => ApplicationLocationUpdateInput)
  update!: ApplicationLocationUpdateInput;
}
