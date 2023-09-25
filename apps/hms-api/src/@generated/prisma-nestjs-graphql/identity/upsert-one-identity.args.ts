import { Field, ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { IdentityWhereUniqueInput } from './identity-where-unique.input';
import { IdentityCreateInput } from './identity-create.input';
import { IdentityUpdateInput } from './identity-update.input';

@ArgsType()
export class UpsertOneIdentityArgs {
  @Field(() => IdentityWhereUniqueInput, { nullable: false })
  @Type(() => IdentityWhereUniqueInput)
  where!: Prisma.AtLeast<IdentityWhereUniqueInput, 'sub_identity_provider'>;

  @Field(() => IdentityCreateInput, { nullable: false })
  @Type(() => IdentityCreateInput)
  create!: IdentityCreateInput;

  @Field(() => IdentityUpdateInput, { nullable: false })
  @Type(() => IdentityUpdateInput)
  update!: IdentityUpdateInput;
}
