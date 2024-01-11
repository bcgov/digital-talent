import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { IdentityWhereUniqueInput } from './identity-where-unique.input';
import { IdentityUpdateWithoutUserInput } from './identity-update-without-user.input';

@InputType()
export class IdentityUpdateWithWhereUniqueWithoutUserInput {
  @Field(() => IdentityWhereUniqueInput, { nullable: false })
  @Type(() => IdentityWhereUniqueInput)
  where!: Prisma.AtLeast<IdentityWhereUniqueInput, 'sub_identity_provider'>;

  @Field(() => IdentityUpdateWithoutUserInput, { nullable: false })
  @Type(() => IdentityUpdateWithoutUserInput)
  data!: IdentityUpdateWithoutUserInput;
}
