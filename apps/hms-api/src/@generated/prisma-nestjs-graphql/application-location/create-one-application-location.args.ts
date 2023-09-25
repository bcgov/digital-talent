import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ApplicationLocationCreateInput } from './application-location-create.input';

@ArgsType()
export class CreateOneApplicationLocationArgs {
  @Field(() => ApplicationLocationCreateInput, { nullable: false })
  @Type(() => ApplicationLocationCreateInput)
  data!: ApplicationLocationCreateInput;
}
