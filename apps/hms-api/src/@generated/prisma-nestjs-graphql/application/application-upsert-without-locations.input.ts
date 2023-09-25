import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ApplicationUpdateWithoutLocationsInput } from './application-update-without-locations.input';
import { ApplicationCreateWithoutLocationsInput } from './application-create-without-locations.input';
import { ApplicationWhereInput } from './application-where.input';

@InputType()
export class ApplicationUpsertWithoutLocationsInput {
  @Field(() => ApplicationUpdateWithoutLocationsInput, { nullable: false })
  @Type(() => ApplicationUpdateWithoutLocationsInput)
  update!: ApplicationUpdateWithoutLocationsInput;

  @Field(() => ApplicationCreateWithoutLocationsInput, { nullable: false })
  @Type(() => ApplicationCreateWithoutLocationsInput)
  create!: ApplicationCreateWithoutLocationsInput;

  @Field(() => ApplicationWhereInput, { nullable: true })
  @Type(() => ApplicationWhereInput)
  where?: ApplicationWhereInput;
}
