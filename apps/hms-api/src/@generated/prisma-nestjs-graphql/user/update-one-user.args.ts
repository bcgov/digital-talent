import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserUpdateInput } from './user-update.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@ArgsType()
export class UpdateOneUserArgs {
  @Field(() => UserUpdateInput, { nullable: false })
  @Type(() => UserUpdateInput)
  data!: UserUpdateInput;

  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'deltek_id' | 'email'>;
}
