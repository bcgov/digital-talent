import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserCreateWithoutOpportunitiesInput } from './user-create-without-opportunities.input';
import { UserCreateOrConnectWithoutOpportunitiesInput } from './user-create-or-connect-without-opportunities.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutOpportunitiesInput {
  @Field(() => UserCreateWithoutOpportunitiesInput, { nullable: true })
  @Type(() => UserCreateWithoutOpportunitiesInput)
  create?: UserCreateWithoutOpportunitiesInput;

  @Field(() => UserCreateOrConnectWithoutOpportunitiesInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutOpportunitiesInput)
  connectOrCreate?: UserCreateOrConnectWithoutOpportunitiesInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'deltek_id' | 'email'>;
}
