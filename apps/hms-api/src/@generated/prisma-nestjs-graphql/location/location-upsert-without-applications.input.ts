import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { LocationUpdateWithoutApplicationsInput } from './location-update-without-applications.input';
import { LocationCreateWithoutApplicationsInput } from './location-create-without-applications.input';
import { LocationWhereInput } from './location-where.input';

@InputType()
export class LocationUpsertWithoutApplicationsInput {
  @Field(() => LocationUpdateWithoutApplicationsInput, { nullable: false })
  @Type(() => LocationUpdateWithoutApplicationsInput)
  update!: LocationUpdateWithoutApplicationsInput;

  @Field(() => LocationCreateWithoutApplicationsInput, { nullable: false })
  @Type(() => LocationCreateWithoutApplicationsInput)
  create!: LocationCreateWithoutApplicationsInput;

  @Field(() => LocationWhereInput, { nullable: true })
  @Type(() => LocationWhereInput)
  where?: LocationWhereInput;
}
