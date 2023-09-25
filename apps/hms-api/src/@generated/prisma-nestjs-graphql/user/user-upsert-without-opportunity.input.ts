import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { UserUpdateWithoutOpportunityInput } from './user-update-without-opportunity.input';
import { UserCreateWithoutOpportunityInput } from './user-create-without-opportunity.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutOpportunityInput {
  @Field(() => UserUpdateWithoutOpportunityInput, { nullable: false })
  @Type(() => UserUpdateWithoutOpportunityInput)
  update!: UserUpdateWithoutOpportunityInput;

  @Field(() => UserCreateWithoutOpportunityInput, { nullable: false })
  @Type(() => UserCreateWithoutOpportunityInput)
  create!: UserCreateWithoutOpportunityInput;

  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;
}
