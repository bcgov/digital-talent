import { Field, ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateInput } from './user-create.input';
import { UserUpdateInput } from './user-update.input';

@ArgsType()
export class UpsertOneUserArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'deltek_id' | 'email'>;

  @Field(() => UserCreateInput, { nullable: false })
  @Type(() => UserCreateInput)
  create!: UserCreateInput;

  @Field(() => UserUpdateInput, { nullable: false })
  @Type(() => UserUpdateInput)
  update!: UserUpdateInput;
}
