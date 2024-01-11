import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutIdentitiesInput } from './user-create-without-identities.input';

@InputType()
export class UserCreateOrConnectWithoutIdentitiesInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'deltek_id' | 'email'>;

  @Field(() => UserCreateWithoutIdentitiesInput, { nullable: false })
  @Type(() => UserCreateWithoutIdentitiesInput)
  create!: UserCreateWithoutIdentitiesInput;
}
