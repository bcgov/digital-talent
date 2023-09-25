import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { UserUpdateWithoutElistInput } from './user-update-without-elist.input';
import { UserCreateWithoutElistInput } from './user-create-without-elist.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutElistInput {
  @Field(() => UserUpdateWithoutElistInput, { nullable: false })
  @Type(() => UserUpdateWithoutElistInput)
  update!: UserUpdateWithoutElistInput;

  @Field(() => UserCreateWithoutElistInput, { nullable: false })
  @Type(() => UserCreateWithoutElistInput)
  create!: UserCreateWithoutElistInput;

  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;
}
