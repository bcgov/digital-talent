import { Field, InputType, Int } from '@nestjs/graphql';
import { ApplicationCreateNestedOneWithoutLocationsInput } from '../application/application-create-nested-one-without-locations.input';
import { LocationCreateNestedOneWithoutApplicationsInput } from '../location/location-create-nested-one-without-applications.input';

@InputType()
export class ApplicationLocationCreateInput {
  @Field(() => Int, { nullable: false })
  rank!: number;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => ApplicationCreateNestedOneWithoutLocationsInput, { nullable: false })
  application!: ApplicationCreateNestedOneWithoutLocationsInput;

  @Field(() => LocationCreateNestedOneWithoutApplicationsInput, { nullable: false })
  location!: LocationCreateNestedOneWithoutApplicationsInput;
}
