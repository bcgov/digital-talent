import { Field, ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { IdentityWhereUniqueInput } from './identity-where-unique.input';

@ArgsType()
export class FindUniqueIdentityOrThrowArgs {
  @Field(() => IdentityWhereUniqueInput, { nullable: false })
  @Type(() => IdentityWhereUniqueInput)
  where!: Prisma.AtLeast<IdentityWhereUniqueInput, 'sub_identity_provider'>;
}
