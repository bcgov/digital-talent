import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutElistInput } from './user-create-without-elist.input';

@InputType()
export class UserCreateOrConnectWithoutElistInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'deltek_id' | 'email'>;

  @Field(() => UserCreateWithoutElistInput, { nullable: false })
  @Type(() => UserCreateWithoutElistInput)
  create!: UserCreateWithoutElistInput;
}
