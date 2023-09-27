import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OccupationGroupWhereInput } from './occupation-group-where.input';

@ArgsType()
export class DeleteManyOccupationGroupArgs {
  @Field(() => OccupationGroupWhereInput, { nullable: true })
  @Type(() => OccupationGroupWhereInput)
  where?: OccupationGroupWhereInput;
}
