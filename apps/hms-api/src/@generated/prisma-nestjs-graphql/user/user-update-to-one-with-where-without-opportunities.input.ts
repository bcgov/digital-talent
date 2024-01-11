import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { UserWhereInput } from './user-where.input';
import { UserUpdateWithoutOpportunitiesInput } from './user-update-without-opportunities.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutOpportunitiesInput {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;

  @Field(() => UserUpdateWithoutOpportunitiesInput, { nullable: false })
  @Type(() => UserUpdateWithoutOpportunitiesInput)
  data!: UserUpdateWithoutOpportunitiesInput;
}
