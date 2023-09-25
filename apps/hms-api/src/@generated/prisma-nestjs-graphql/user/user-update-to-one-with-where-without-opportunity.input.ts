import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { UserWhereInput } from './user-where.input';
import { UserUpdateWithoutOpportunityInput } from './user-update-without-opportunity.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutOpportunityInput {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;

  @Field(() => UserUpdateWithoutOpportunityInput, { nullable: false })
  @Type(() => UserUpdateWithoutOpportunityInput)
  data!: UserUpdateWithoutOpportunityInput;
}
