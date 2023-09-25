import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ElistCreateInput } from './elist-create.input';

@ArgsType()
export class CreateOneElistArgs {
  @Field(() => ElistCreateInput, { nullable: false })
  @Type(() => ElistCreateInput)
  data!: ElistCreateInput;
}
