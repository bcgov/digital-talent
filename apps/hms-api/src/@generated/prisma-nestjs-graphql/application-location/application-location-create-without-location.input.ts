import { Field, InputType, Int } from '@nestjs/graphql';
import { ApplicationCreateNestedOneWithoutLocationsInput } from '../application/application-create-nested-one-without-locations.input';

@InputType()
export class ApplicationLocationCreateWithoutLocationInput {
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
}
