import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ElistWhereInput } from './elist-where.input';

@ArgsType()
export class DeleteManyElistArgs {
  @Field(() => ElistWhereInput, { nullable: true })
  @Type(() => ElistWhereInput)
  where?: ElistWhereInput;
}
