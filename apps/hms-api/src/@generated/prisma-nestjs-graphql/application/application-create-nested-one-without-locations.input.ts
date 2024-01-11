import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ApplicationCreateWithoutLocationsInput } from './application-create-without-locations.input';
import { ApplicationCreateOrConnectWithoutLocationsInput } from './application-create-or-connect-without-locations.input';
import { ApplicationWhereUniqueInput } from './application-where-unique.input';

@InputType()
export class ApplicationCreateNestedOneWithoutLocationsInput {
  @Field(() => ApplicationCreateWithoutLocationsInput, { nullable: true })
  @Type(() => ApplicationCreateWithoutLocationsInput)
  create?: ApplicationCreateWithoutLocationsInput;

  @Field(() => ApplicationCreateOrConnectWithoutLocationsInput, { nullable: true })
  @Type(() => ApplicationCreateOrConnectWithoutLocationsInput)
  connectOrCreate?: ApplicationCreateOrConnectWithoutLocationsInput;

  @Field(() => ApplicationWhereUniqueInput, { nullable: true })
  @Type(() => ApplicationWhereUniqueInput)
  connect?: Prisma.AtLeast<ApplicationWhereUniqueInput, 'id'>;
}
