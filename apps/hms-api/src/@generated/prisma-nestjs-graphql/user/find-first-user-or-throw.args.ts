import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserWhereInput } from './user-where.input';
import { UserOrderByWithRelationInput } from './user-order-by-with-relation.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserScalarFieldEnum } from './user-scalar-field.enum';

@ArgsType()
export class FindFirstUserOrThrowArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;

  @Field(() => [UserOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserOrderByWithRelationInput>;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'deltek_id' | 'email'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [UserScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
