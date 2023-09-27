import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { LocationWhereInput } from './location-where.input';
import { LocationUpdateWithoutApplicationsInput } from './location-update-without-applications.input';

@InputType()
export class LocationUpdateToOneWithWhereWithoutApplicationsInput {
  @Field(() => LocationWhereInput, { nullable: true })
  @Type(() => LocationWhereInput)
  where?: LocationWhereInput;

  @Field(() => LocationUpdateWithoutApplicationsInput, { nullable: false })
  @Type(() => LocationUpdateWithoutApplicationsInput)
  data!: LocationUpdateWithoutApplicationsInput;
}
