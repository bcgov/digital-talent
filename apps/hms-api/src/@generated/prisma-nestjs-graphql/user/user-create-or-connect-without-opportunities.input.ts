import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutOpportunitiesInput } from './user-create-without-opportunities.input';

@InputType()
export class UserCreateOrConnectWithoutOpportunitiesInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'deltek_id' | 'email'>;

  @Field(() => UserCreateWithoutOpportunitiesInput, { nullable: false })
  @Type(() => UserCreateWithoutOpportunitiesInput)
  create!: UserCreateWithoutOpportunitiesInput;
}
