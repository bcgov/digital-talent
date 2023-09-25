import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { IdentityCreateWithoutUserInput } from './identity-create-without-user.input';
import { IdentityCreateOrConnectWithoutUserInput } from './identity-create-or-connect-without-user.input';
import { IdentityCreateManyUserInputEnvelope } from './identity-create-many-user-input-envelope.input';
import { IdentityWhereUniqueInput } from './identity-where-unique.input';

@InputType()
export class IdentityUncheckedCreateNestedManyWithoutUserInput {
  @Field(() => [IdentityCreateWithoutUserInput], { nullable: true })
  @Type(() => IdentityCreateWithoutUserInput)
  create?: Array<IdentityCreateWithoutUserInput>;

  @Field(() => [IdentityCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => IdentityCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<IdentityCreateOrConnectWithoutUserInput>;

  @Field(() => IdentityCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => IdentityCreateManyUserInputEnvelope)
  createMany?: IdentityCreateManyUserInputEnvelope;

  @Field(() => [IdentityWhereUniqueInput], { nullable: true })
  @Type(() => IdentityWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<IdentityWhereUniqueInput, 'sub_identity_provider'>>;
}
