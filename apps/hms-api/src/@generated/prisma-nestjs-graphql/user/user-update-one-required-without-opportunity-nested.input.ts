import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserCreateWithoutOpportunityInput } from './user-create-without-opportunity.input';
import { UserCreateOrConnectWithoutOpportunityInput } from './user-create-or-connect-without-opportunity.input';
import { UserUpsertWithoutOpportunityInput } from './user-upsert-without-opportunity.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutOpportunityInput } from './user-update-to-one-with-where-without-opportunity.input';

@InputType()
export class UserUpdateOneRequiredWithoutOpportunityNestedInput {
  @Field(() => UserCreateWithoutOpportunityInput, { nullable: true })
  @Type(() => UserCreateWithoutOpportunityInput)
  create?: UserCreateWithoutOpportunityInput;

  @Field(() => UserCreateOrConnectWithoutOpportunityInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutOpportunityInput)
  connectOrCreate?: UserCreateOrConnectWithoutOpportunityInput;

  @Field(() => UserUpsertWithoutOpportunityInput, { nullable: true })
  @Type(() => UserUpsertWithoutOpportunityInput)
  upsert?: UserUpsertWithoutOpportunityInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'deltek_id' | 'email'>;

  @Field(() => UserUpdateToOneWithWhereWithoutOpportunityInput, { nullable: true })
  @Type(() => UserUpdateToOneWithWhereWithoutOpportunityInput)
  update?: UserUpdateToOneWithWhereWithoutOpportunityInput;
}
