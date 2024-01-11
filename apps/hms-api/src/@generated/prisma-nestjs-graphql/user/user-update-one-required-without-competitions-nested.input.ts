import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserCreateWithoutCompetitionsInput } from './user-create-without-competitions.input';
import { UserCreateOrConnectWithoutCompetitionsInput } from './user-create-or-connect-without-competitions.input';
import { UserUpsertWithoutCompetitionsInput } from './user-upsert-without-competitions.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutCompetitionsInput } from './user-update-to-one-with-where-without-competitions.input';

@InputType()
export class UserUpdateOneRequiredWithoutCompetitionsNestedInput {
  @Field(() => UserCreateWithoutCompetitionsInput, { nullable: true })
  @Type(() => UserCreateWithoutCompetitionsInput)
  create?: UserCreateWithoutCompetitionsInput;

  @Field(() => UserCreateOrConnectWithoutCompetitionsInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutCompetitionsInput)
  connectOrCreate?: UserCreateOrConnectWithoutCompetitionsInput;

  @Field(() => UserUpsertWithoutCompetitionsInput, { nullable: true })
  @Type(() => UserUpsertWithoutCompetitionsInput)
  upsert?: UserUpsertWithoutCompetitionsInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'deltek_id' | 'email'>;

  @Field(() => UserUpdateToOneWithWhereWithoutCompetitionsInput, { nullable: true })
  @Type(() => UserUpdateToOneWithWhereWithoutCompetitionsInput)
  update?: UserUpdateToOneWithWhereWithoutCompetitionsInput;
}
