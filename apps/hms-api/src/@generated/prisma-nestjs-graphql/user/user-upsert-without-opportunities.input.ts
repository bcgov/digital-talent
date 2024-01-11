import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { UserUpdateWithoutOpportunitiesInput } from './user-update-without-opportunities.input';
import { UserCreateWithoutOpportunitiesInput } from './user-create-without-opportunities.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutOpportunitiesInput {
  @Field(() => UserUpdateWithoutOpportunitiesInput, { nullable: false })
  @Type(() => UserUpdateWithoutOpportunitiesInput)
  update!: UserUpdateWithoutOpportunitiesInput;

  @Field(() => UserCreateWithoutOpportunitiesInput, { nullable: false })
  @Type(() => UserCreateWithoutOpportunitiesInput)
  create!: UserCreateWithoutOpportunitiesInput;

  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;
}
