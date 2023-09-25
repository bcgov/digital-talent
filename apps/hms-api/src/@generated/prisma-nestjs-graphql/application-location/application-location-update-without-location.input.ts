import { Field, InputType, Int } from '@nestjs/graphql';
import { ApplicationUpdateOneRequiredWithoutLocationsNestedInput } from '../application/application-update-one-required-without-locations-nested.input';

@InputType()
export class ApplicationLocationUpdateWithoutLocationInput {
  @Field(() => Int, { nullable: true })
  rank?: number;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => ApplicationUpdateOneRequiredWithoutLocationsNestedInput, { nullable: true })
  application?: ApplicationUpdateOneRequiredWithoutLocationsNestedInput;
}
