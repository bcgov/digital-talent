import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutApplicationsInput } from './user-create-without-applications.input';

@InputType()
export class UserCreateOrConnectWithoutApplicationsInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'deltek_id' | 'email'>;

  @Field(() => UserCreateWithoutApplicationsInput, { nullable: false })
  @Type(() => UserCreateWithoutApplicationsInput)
  create!: UserCreateWithoutApplicationsInput;
}
