import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CompetitionCreateWithoutElistInput } from './competition-create-without-elist.input';
import { CompetitionCreateOrConnectWithoutElistInput } from './competition-create-or-connect-without-elist.input';
import { CompetitionUpsertWithoutElistInput } from './competition-upsert-without-elist.input';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';
import { CompetitionUpdateToOneWithWhereWithoutElistInput } from './competition-update-to-one-with-where-without-elist.input';

@InputType()
export class CompetitionUpdateOneRequiredWithoutElistNestedInput {
  @Field(() => CompetitionCreateWithoutElistInput, { nullable: true })
  @Type(() => CompetitionCreateWithoutElistInput)
  create?: CompetitionCreateWithoutElistInput;

  @Field(() => CompetitionCreateOrConnectWithoutElistInput, { nullable: true })
  @Type(() => CompetitionCreateOrConnectWithoutElistInput)
  connectOrCreate?: CompetitionCreateOrConnectWithoutElistInput;

  @Field(() => CompetitionUpsertWithoutElistInput, { nullable: true })
  @Type(() => CompetitionUpsertWithoutElistInput)
  upsert?: CompetitionUpsertWithoutElistInput;

  @Field(() => CompetitionWhereUniqueInput, { nullable: true })
  @Type(() => CompetitionWhereUniqueInput)
  connect?: Prisma.AtLeast<CompetitionWhereUniqueInput, 'id'>;

  @Field(() => CompetitionUpdateToOneWithWhereWithoutElistInput, { nullable: true })
  @Type(() => CompetitionUpdateToOneWithWhereWithoutElistInput)
  update?: CompetitionUpdateToOneWithWhereWithoutElistInput;
}
