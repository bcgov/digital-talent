import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { UserWhereInput } from './user-where.input';
import { UserUpdateWithoutApplicationsInput } from './user-update-without-applications.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutApplicationsInput {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;

  @Field(() => UserUpdateWithoutApplicationsInput, { nullable: false })
  @Type(() => UserUpdateWithoutApplicationsInput)
  data!: UserUpdateWithoutApplicationsInput;
}
