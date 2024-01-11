import { Field, ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { LocationWhereUniqueInput } from './location-where-unique.input';
import { LocationCreateInput } from './location-create.input';
import { LocationUpdateInput } from './location-update.input';

@ArgsType()
export class UpsertOneLocationArgs {
  @Field(() => LocationWhereUniqueInput, { nullable: false })
  @Type(() => LocationWhereUniqueInput)
  where!: Prisma.AtLeast<LocationWhereUniqueInput, 'id'>;

  @Field(() => LocationCreateInput, { nullable: false })
  @Type(() => LocationCreateInput)
  create!: LocationCreateInput;

  @Field(() => LocationUpdateInput, { nullable: false })
  @Type(() => LocationUpdateInput)
  update!: LocationUpdateInput;
}
