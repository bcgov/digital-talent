import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ApplicationWhereUniqueInput } from './application-where-unique.input';
import { ApplicationCreateWithoutLocationsInput } from './application-create-without-locations.input';

@InputType()
export class ApplicationCreateOrConnectWithoutLocationsInput {
  @Field(() => ApplicationWhereUniqueInput, { nullable: false })
  @Type(() => ApplicationWhereUniqueInput)
  where!: Prisma.AtLeast<ApplicationWhereUniqueInput, 'id'>;

  @Field(() => ApplicationCreateWithoutLocationsInput, { nullable: false })
  @Type(() => ApplicationCreateWithoutLocationsInput)
  create!: ApplicationCreateWithoutLocationsInput;
}
