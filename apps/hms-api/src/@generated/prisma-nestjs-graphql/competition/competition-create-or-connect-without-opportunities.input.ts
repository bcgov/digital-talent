import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';
import { CompetitionCreateWithoutOpportunitiesInput } from './competition-create-without-opportunities.input';

@InputType()
export class CompetitionCreateOrConnectWithoutOpportunitiesInput {
  @Field(() => CompetitionWhereUniqueInput, { nullable: false })
  @Type(() => CompetitionWhereUniqueInput)
  where!: Prisma.AtLeast<CompetitionWhereUniqueInput, 'id'>;

  @Field(() => CompetitionCreateWithoutOpportunitiesInput, { nullable: false })
  @Type(() => CompetitionCreateWithoutOpportunitiesInput)
  create!: CompetitionCreateWithoutOpportunitiesInput;
}
