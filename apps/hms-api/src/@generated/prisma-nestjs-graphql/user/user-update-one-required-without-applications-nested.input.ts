import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserCreateWithoutApplicationsInput } from './user-create-without-applications.input';
import { UserCreateOrConnectWithoutApplicationsInput } from './user-create-or-connect-without-applications.input';
import { UserUpsertWithoutApplicationsInput } from './user-upsert-without-applications.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutApplicationsInput } from './user-update-to-one-with-where-without-applications.input';

@InputType()
export class UserUpdateOneRequiredWithoutApplicationsNestedInput {
  @Field(() => UserCreateWithoutApplicationsInput, { nullable: true })
  @Type(() => UserCreateWithoutApplicationsInput)
  create?: UserCreateWithoutApplicationsInput;

  @Field(() => UserCreateOrConnectWithoutApplicationsInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutApplicationsInput)
  connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput;

  @Field(() => UserUpsertWithoutApplicationsInput, { nullable: true })
  @Type(() => UserUpsertWithoutApplicationsInput)
  upsert?: UserUpsertWithoutApplicationsInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'deltek_id' | 'email'>;

  @Field(() => UserUpdateToOneWithWhereWithoutApplicationsInput, { nullable: true })
  @Type(() => UserUpdateToOneWithWhereWithoutApplicationsInput)
  update?: UserUpdateToOneWithWhereWithoutApplicationsInput;
}
