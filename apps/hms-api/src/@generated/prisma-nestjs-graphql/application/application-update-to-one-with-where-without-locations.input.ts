import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ApplicationWhereInput } from './application-where.input';
import { ApplicationUpdateWithoutLocationsInput } from './application-update-without-locations.input';

@InputType()
export class ApplicationUpdateToOneWithWhereWithoutLocationsInput {
  @Field(() => ApplicationWhereInput, { nullable: true })
  @Type(() => ApplicationWhereInput)
  where?: ApplicationWhereInput;

  @Field(() => ApplicationUpdateWithoutLocationsInput, { nullable: false })
  @Type(() => ApplicationUpdateWithoutLocationsInput)
  data!: ApplicationUpdateWithoutLocationsInput;
}
