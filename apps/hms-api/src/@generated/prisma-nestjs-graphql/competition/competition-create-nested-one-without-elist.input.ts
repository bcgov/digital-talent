import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CompetitionCreateWithoutElistInput } from './competition-create-without-elist.input';
import { CompetitionCreateOrConnectWithoutElistInput } from './competition-create-or-connect-without-elist.input';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';

@InputType()
export class CompetitionCreateNestedOneWithoutElistInput {
  @Field(() => CompetitionCreateWithoutElistInput, { nullable: true })
  @Type(() => CompetitionCreateWithoutElistInput)
  create?: CompetitionCreateWithoutElistInput;

  @Field(() => CompetitionCreateOrConnectWithoutElistInput, { nullable: true })
  @Type(() => CompetitionCreateOrConnectWithoutElistInput)
  connectOrCreate?: CompetitionCreateOrConnectWithoutElistInput;

  @Field(() => CompetitionWhereUniqueInput, { nullable: true })
  @Type(() => CompetitionWhereUniqueInput)
  connect?: Prisma.AtLeast<CompetitionWhereUniqueInput, 'id'>;
}
