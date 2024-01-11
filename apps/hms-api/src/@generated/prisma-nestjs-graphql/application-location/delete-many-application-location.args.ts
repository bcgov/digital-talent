import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ApplicationLocationWhereInput } from './application-location-where.input';

@ArgsType()
export class DeleteManyApplicationLocationArgs {
  @Field(() => ApplicationLocationWhereInput, { nullable: true })
  @Type(() => ApplicationLocationWhereInput)
  where?: ApplicationLocationWhereInput;
}
