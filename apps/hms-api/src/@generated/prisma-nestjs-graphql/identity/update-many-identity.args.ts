import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IdentityUpdateManyMutationInput } from './identity-update-many-mutation.input';
import { IdentityWhereInput } from './identity-where.input';

@ArgsType()
export class UpdateManyIdentityArgs {
  @Field(() => IdentityUpdateManyMutationInput, { nullable: false })
  @Type(() => IdentityUpdateManyMutationInput)
  data!: IdentityUpdateManyMutationInput;

  @Field(() => IdentityWhereInput, { nullable: true })
  @Type(() => IdentityWhereInput)
  where?: IdentityWhereInput;
}
