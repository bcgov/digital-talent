import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserCreateWithoutApplicationsInput } from './user-create-without-applications.input';
import { UserCreateOrConnectWithoutApplicationsInput } from './user-create-or-connect-without-applications.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutApplicationsInput {
  @Field(() => UserCreateWithoutApplicationsInput, { nullable: true })
  @Type(() => UserCreateWithoutApplicationsInput)
  create?: UserCreateWithoutApplicationsInput;

  @Field(() => UserCreateOrConnectWithoutApplicationsInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutApplicationsInput)
  connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'deltek_id' | 'email'>;
}
