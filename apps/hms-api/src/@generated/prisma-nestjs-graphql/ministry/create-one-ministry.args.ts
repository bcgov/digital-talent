import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { MinistryCreateInput } from './ministry-create.input';

@ArgsType()
export class CreateOneMinistryArgs {
  @Field(() => MinistryCreateInput, { nullable: false })
  @Type(() => MinistryCreateInput)
  data!: MinistryCreateInput;
}
