import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { UserUpdateWithoutApplicationsInput } from './user-update-without-applications.input';
import { UserCreateWithoutApplicationsInput } from './user-create-without-applications.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutApplicationsInput {
  @Field(() => UserUpdateWithoutApplicationsInput, { nullable: false })
  @Type(() => UserUpdateWithoutApplicationsInput)
  update!: UserUpdateWithoutApplicationsInput;

  @Field(() => UserCreateWithoutApplicationsInput, { nullable: false })
  @Type(() => UserCreateWithoutApplicationsInput)
  create!: UserCreateWithoutApplicationsInput;

  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;
}
