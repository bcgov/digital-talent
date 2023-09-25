import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IdentityWhereInput } from './identity-where.input';

@ArgsType()
export class DeleteManyIdentityArgs {
  @Field(() => IdentityWhereInput, { nullable: true })
  @Type(() => IdentityWhereInput)
  where?: IdentityWhereInput;
}
