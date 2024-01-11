import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IdentityCreateInput } from './identity-create.input';

@ArgsType()
export class CreateOneIdentityArgs {
  @Field(() => IdentityCreateInput, { nullable: false })
  @Type(() => IdentityCreateInput)
  data!: IdentityCreateInput;
}
