import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserCreateWithoutCompetitionsInput } from './user-create-without-competitions.input';
import { UserCreateOrConnectWithoutCompetitionsInput } from './user-create-or-connect-without-competitions.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutCompetitionsInput {
  @Field(() => UserCreateWithoutCompetitionsInput, { nullable: true })
  @Type(() => UserCreateWithoutCompetitionsInput)
  create?: UserCreateWithoutCompetitionsInput;

  @Field(() => UserCreateOrConnectWithoutCompetitionsInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutCompetitionsInput)
  connectOrCreate?: UserCreateOrConnectWithoutCompetitionsInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'deltek_id' | 'email'>;
}
