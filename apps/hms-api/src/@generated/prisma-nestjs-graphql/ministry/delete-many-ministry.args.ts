import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { MinistryWhereInput } from './ministry-where.input';

@ArgsType()
export class DeleteManyMinistryArgs {
  @Field(() => MinistryWhereInput, { nullable: true })
  @Type(() => MinistryWhereInput)
  where?: MinistryWhereInput;
}
