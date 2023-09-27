import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { UserWhereInput } from './user-where.input';
import { UserUpdateWithoutCompetitionsInput } from './user-update-without-competitions.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutCompetitionsInput {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;

  @Field(() => UserUpdateWithoutCompetitionsInput, { nullable: false })
  @Type(() => UserUpdateWithoutCompetitionsInput)
  data!: UserUpdateWithoutCompetitionsInput;
}
