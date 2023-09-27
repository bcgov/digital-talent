import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';
import { CompetitionCreateWithoutElistInput } from './competition-create-without-elist.input';

@InputType()
export class CompetitionCreateOrConnectWithoutElistInput {
  @Field(() => CompetitionWhereUniqueInput, { nullable: false })
  @Type(() => CompetitionWhereUniqueInput)
  where!: Prisma.AtLeast<CompetitionWhereUniqueInput, 'id'>;

  @Field(() => CompetitionCreateWithoutElistInput, { nullable: false })
  @Type(() => CompetitionCreateWithoutElistInput)
  create!: CompetitionCreateWithoutElistInput;
}
