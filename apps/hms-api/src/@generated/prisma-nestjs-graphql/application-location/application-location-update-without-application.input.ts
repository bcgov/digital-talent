import { Field, InputType, Int } from '@nestjs/graphql';
import { LocationUpdateOneRequiredWithoutApplicationsNestedInput } from '../location/location-update-one-required-without-applications-nested.input';

@InputType()
export class ApplicationLocationUpdateWithoutApplicationInput {
  @Field(() => Int, { nullable: true })
  rank?: number;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => LocationUpdateOneRequiredWithoutApplicationsNestedInput, { nullable: true })
  location?: LocationUpdateOneRequiredWithoutApplicationsNestedInput;
}
