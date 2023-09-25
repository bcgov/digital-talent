import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserCreateWithoutOpportunityInput } from './user-create-without-opportunity.input';
import { UserCreateOrConnectWithoutOpportunityInput } from './user-create-or-connect-without-opportunity.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutOpportunityInput {
  @Field(() => UserCreateWithoutOpportunityInput, { nullable: true })
  @Type(() => UserCreateWithoutOpportunityInput)
  create?: UserCreateWithoutOpportunityInput;

  @Field(() => UserCreateOrConnectWithoutOpportunityInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutOpportunityInput)
  connectOrCreate?: UserCreateOrConnectWithoutOpportunityInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'deltek_id' | 'email'>;
}
