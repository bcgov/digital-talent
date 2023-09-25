import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { LocationCreateWithoutApplicationsInput } from './location-create-without-applications.input';
import { LocationCreateOrConnectWithoutApplicationsInput } from './location-create-or-connect-without-applications.input';
import { LocationUpsertWithoutApplicationsInput } from './location-upsert-without-applications.input';
import { LocationWhereUniqueInput } from './location-where-unique.input';
import { LocationUpdateToOneWithWhereWithoutApplicationsInput } from './location-update-to-one-with-where-without-applications.input';

@InputType()
export class LocationUpdateOneRequiredWithoutApplicationsNestedInput {
  @Field(() => LocationCreateWithoutApplicationsInput, { nullable: true })
  @Type(() => LocationCreateWithoutApplicationsInput)
  create?: LocationCreateWithoutApplicationsInput;

  @Field(() => LocationCreateOrConnectWithoutApplicationsInput, { nullable: true })
  @Type(() => LocationCreateOrConnectWithoutApplicationsInput)
  connectOrCreate?: LocationCreateOrConnectWithoutApplicationsInput;

  @Field(() => LocationUpsertWithoutApplicationsInput, { nullable: true })
  @Type(() => LocationUpsertWithoutApplicationsInput)
  upsert?: LocationUpsertWithoutApplicationsInput;

  @Field(() => LocationWhereUniqueInput, { nullable: true })
  @Type(() => LocationWhereUniqueInput)
  connect?: Prisma.AtLeast<LocationWhereUniqueInput, 'id'>;

  @Field(() => LocationUpdateToOneWithWhereWithoutApplicationsInput, { nullable: true })
  @Type(() => LocationUpdateToOneWithWhereWithoutApplicationsInput)
  update?: LocationUpdateToOneWithWhereWithoutApplicationsInput;
}
