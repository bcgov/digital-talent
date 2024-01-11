import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { IdentityWhereUniqueInput } from './identity-where-unique.input';
import { IdentityUpdateWithoutUserInput } from './identity-update-without-user.input';
import { IdentityCreateWithoutUserInput } from './identity-create-without-user.input';

@InputType()
export class IdentityUpsertWithWhereUniqueWithoutUserInput {
  @Field(() => IdentityWhereUniqueInput, { nullable: false })
  @Type(() => IdentityWhereUniqueInput)
  where!: Prisma.AtLeast<IdentityWhereUniqueInput, 'sub_identity_provider'>;

  @Field(() => IdentityUpdateWithoutUserInput, { nullable: false })
  @Type(() => IdentityUpdateWithoutUserInput)
  update!: IdentityUpdateWithoutUserInput;

  @Field(() => IdentityCreateWithoutUserInput, { nullable: false })
  @Type(() => IdentityCreateWithoutUserInput)
  create!: IdentityCreateWithoutUserInput;
}
