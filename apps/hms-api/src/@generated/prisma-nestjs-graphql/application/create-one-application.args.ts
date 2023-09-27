import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ApplicationCreateInput } from './application-create.input';

@ArgsType()
export class CreateOneApplicationArgs {
  @Field(() => ApplicationCreateInput, { nullable: false })
  @Type(() => ApplicationCreateInput)
  data!: ApplicationCreateInput;
}
