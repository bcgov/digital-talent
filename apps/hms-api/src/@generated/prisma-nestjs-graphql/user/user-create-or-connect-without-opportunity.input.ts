import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutOpportunityInput } from './user-create-without-opportunity.input';

@InputType()
export class UserCreateOrConnectWithoutOpportunityInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'deltek_id' | 'email'>;

  @Field(() => UserCreateWithoutOpportunityInput, { nullable: false })
  @Type(() => UserCreateWithoutOpportunityInput)
  create!: UserCreateWithoutOpportunityInput;
}
