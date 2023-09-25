import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { GridCreateInput } from './grid-create.input';

@ArgsType()
export class CreateOneGridArgs {
  @Field(() => GridCreateInput, { nullable: false })
  @Type(() => GridCreateInput)
  data!: GridCreateInput;
}
