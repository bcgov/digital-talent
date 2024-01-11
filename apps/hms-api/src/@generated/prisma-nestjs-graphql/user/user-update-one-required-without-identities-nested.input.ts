import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserCreateWithoutIdentitiesInput } from './user-create-without-identities.input';
import { UserCreateOrConnectWithoutIdentitiesInput } from './user-create-or-connect-without-identities.input';
import { UserUpsertWithoutIdentitiesInput } from './user-upsert-without-identities.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutIdentitiesInput } from './user-update-to-one-with-where-without-identities.input';

@InputType()
export class UserUpdateOneRequiredWithoutIdentitiesNestedInput {
  @Field(() => UserCreateWithoutIdentitiesInput, { nullable: true })
  @Type(() => UserCreateWithoutIdentitiesInput)
  create?: UserCreateWithoutIdentitiesInput;

  @Field(() => UserCreateOrConnectWithoutIdentitiesInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutIdentitiesInput)
  connectOrCreate?: UserCreateOrConnectWithoutIdentitiesInput;

  @Field(() => UserUpsertWithoutIdentitiesInput, { nullable: true })
  @Type(() => UserUpsertWithoutIdentitiesInput)
  upsert?: UserUpsertWithoutIdentitiesInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'deltek_id' | 'email'>;

  @Field(() => UserUpdateToOneWithWhereWithoutIdentitiesInput, { nullable: true })
  @Type(() => UserUpdateToOneWithWhereWithoutIdentitiesInput)
  update?: UserUpdateToOneWithWhereWithoutIdentitiesInput;
}
