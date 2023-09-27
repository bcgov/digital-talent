import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { GridWhereInput } from './grid-where.input';

@ArgsType()
export class DeleteManyGridArgs {
  @Field(() => GridWhereInput, { nullable: true })
  @Type(() => GridWhereInput)
  where?: GridWhereInput;
}
