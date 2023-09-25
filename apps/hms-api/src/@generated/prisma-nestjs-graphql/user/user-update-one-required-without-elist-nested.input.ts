import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserCreateWithoutElistInput } from './user-create-without-elist.input';
import { UserCreateOrConnectWithoutElistInput } from './user-create-or-connect-without-elist.input';
import { UserUpsertWithoutElistInput } from './user-upsert-without-elist.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutElistInput } from './user-update-to-one-with-where-without-elist.input';

@InputType()
export class UserUpdateOneRequiredWithoutElistNestedInput {
  @Field(() => UserCreateWithoutElistInput, { nullable: true })
  @Type(() => UserCreateWithoutElistInput)
  create?: UserCreateWithoutElistInput;

  @Field(() => UserCreateOrConnectWithoutElistInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutElistInput)
  connectOrCreate?: UserCreateOrConnectWithoutElistInput;

  @Field(() => UserUpsertWithoutElistInput, { nullable: true })
  @Type(() => UserUpsertWithoutElistInput)
  upsert?: UserUpsertWithoutElistInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'deltek_id' | 'email'>;

  @Field(() => UserUpdateToOneWithWhereWithoutElistInput, { nullable: true })
  @Type(() => UserUpdateToOneWithWhereWithoutElistInput)
  update?: UserUpdateToOneWithWhereWithoutElistInput;
}
