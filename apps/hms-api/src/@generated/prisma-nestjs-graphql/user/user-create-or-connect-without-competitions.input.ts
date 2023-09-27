import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutCompetitionsInput } from './user-create-without-competitions.input';

@InputType()
export class UserCreateOrConnectWithoutCompetitionsInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'deltek_id' | 'email'>;

  @Field(() => UserCreateWithoutCompetitionsInput, { nullable: false })
  @Type(() => UserCreateWithoutCompetitionsInput)
  create!: UserCreateWithoutCompetitionsInput;
}
