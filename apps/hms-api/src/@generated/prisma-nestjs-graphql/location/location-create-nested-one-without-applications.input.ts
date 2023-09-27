import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { LocationCreateWithoutApplicationsInput } from './location-create-without-applications.input';
import { LocationCreateOrConnectWithoutApplicationsInput } from './location-create-or-connect-without-applications.input';
import { LocationWhereUniqueInput } from './location-where-unique.input';

@InputType()
export class LocationCreateNestedOneWithoutApplicationsInput {
  @Field(() => LocationCreateWithoutApplicationsInput, { nullable: true })
  @Type(() => LocationCreateWithoutApplicationsInput)
  create?: LocationCreateWithoutApplicationsInput;

  @Field(() => LocationCreateOrConnectWithoutApplicationsInput, { nullable: true })
  @Type(() => LocationCreateOrConnectWithoutApplicationsInput)
  connectOrCreate?: LocationCreateOrConnectWithoutApplicationsInput;

  @Field(() => LocationWhereUniqueInput, { nullable: true })
  @Type(() => LocationWhereUniqueInput)
  connect?: Prisma.AtLeast<LocationWhereUniqueInput, 'id'>;
}
