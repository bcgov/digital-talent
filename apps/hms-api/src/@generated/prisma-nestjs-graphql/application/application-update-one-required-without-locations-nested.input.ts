import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ApplicationCreateWithoutLocationsInput } from './application-create-without-locations.input';
import { ApplicationCreateOrConnectWithoutLocationsInput } from './application-create-or-connect-without-locations.input';
import { ApplicationUpsertWithoutLocationsInput } from './application-upsert-without-locations.input';
import { ApplicationWhereUniqueInput } from './application-where-unique.input';
import { ApplicationUpdateToOneWithWhereWithoutLocationsInput } from './application-update-to-one-with-where-without-locations.input';

@InputType()
export class ApplicationUpdateOneRequiredWithoutLocationsNestedInput {
  @Field(() => ApplicationCreateWithoutLocationsInput, { nullable: true })
  @Type(() => ApplicationCreateWithoutLocationsInput)
  create?: ApplicationCreateWithoutLocationsInput;

  @Field(() => ApplicationCreateOrConnectWithoutLocationsInput, { nullable: true })
  @Type(() => ApplicationCreateOrConnectWithoutLocationsInput)
  connectOrCreate?: ApplicationCreateOrConnectWithoutLocationsInput;

  @Field(() => ApplicationUpsertWithoutLocationsInput, { nullable: true })
  @Type(() => ApplicationUpsertWithoutLocationsInput)
  upsert?: ApplicationUpsertWithoutLocationsInput;

  @Field(() => ApplicationWhereUniqueInput, { nullable: true })
  @Type(() => ApplicationWhereUniqueInput)
  connect?: Prisma.AtLeast<ApplicationWhereUniqueInput, 'id'>;

  @Field(() => ApplicationUpdateToOneWithWhereWithoutLocationsInput, { nullable: true })
  @Type(() => ApplicationUpdateToOneWithWhereWithoutLocationsInput)
  update?: ApplicationUpdateToOneWithWhereWithoutLocationsInput;
}
