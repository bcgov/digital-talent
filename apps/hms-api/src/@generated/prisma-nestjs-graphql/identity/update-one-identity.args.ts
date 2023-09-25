import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { IdentityUpdateInput } from './identity-update.input';
import { IdentityWhereUniqueInput } from './identity-where-unique.input';

@ArgsType()
export class UpdateOneIdentityArgs {
  @Field(() => IdentityUpdateInput, { nullable: false })
  @Type(() => IdentityUpdateInput)
  data!: IdentityUpdateInput;

  @Field(() => IdentityWhereUniqueInput, { nullable: false })
  @Type(() => IdentityWhereUniqueInput)
  where!: Prisma.AtLeast<IdentityWhereUniqueInput, 'sub_identity_provider'>;
}
