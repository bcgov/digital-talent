import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserCreateWithoutElistInput } from './user-create-without-elist.input';
import { UserCreateOrConnectWithoutElistInput } from './user-create-or-connect-without-elist.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutElistInput {
  @Field(() => UserCreateWithoutElistInput, { nullable: true })
  @Type(() => UserCreateWithoutElistInput)
  create?: UserCreateWithoutElistInput;

  @Field(() => UserCreateOrConnectWithoutElistInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutElistInput)
  connectOrCreate?: UserCreateOrConnectWithoutElistInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'deltek_id' | 'email'>;
}
