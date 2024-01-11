import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { UserUpdateWithoutCompetitionsInput } from './user-update-without-competitions.input';
import { UserCreateWithoutCompetitionsInput } from './user-create-without-competitions.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutCompetitionsInput {
  @Field(() => UserUpdateWithoutCompetitionsInput, { nullable: false })
  @Type(() => UserUpdateWithoutCompetitionsInput)
  update!: UserUpdateWithoutCompetitionsInput;

  @Field(() => UserCreateWithoutCompetitionsInput, { nullable: false })
  @Type(() => UserCreateWithoutCompetitionsInput)
  create!: UserCreateWithoutCompetitionsInput;

  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;
}
