import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { UserWhereInput } from './user-where.input';
import { UserUpdateWithoutElistInput } from './user-update-without-elist.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutElistInput {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;

  @Field(() => UserUpdateWithoutElistInput, { nullable: false })
  @Type(() => UserUpdateWithoutElistInput)
  data!: UserUpdateWithoutElistInput;
}
