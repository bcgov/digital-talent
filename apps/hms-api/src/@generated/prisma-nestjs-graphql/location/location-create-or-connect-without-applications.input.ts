import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { LocationWhereUniqueInput } from './location-where-unique.input';
import { LocationCreateWithoutApplicationsInput } from './location-create-without-applications.input';

@InputType()
export class LocationCreateOrConnectWithoutApplicationsInput {
  @Field(() => LocationWhereUniqueInput, { nullable: false })
  @Type(() => LocationWhereUniqueInput)
  where!: Prisma.AtLeast<LocationWhereUniqueInput, 'id'>;

  @Field(() => LocationCreateWithoutApplicationsInput, { nullable: false })
  @Type(() => LocationCreateWithoutApplicationsInput)
  create!: LocationCreateWithoutApplicationsInput;
}
