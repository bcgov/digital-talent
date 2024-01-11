import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CompetitionCreateWithoutOpportunitiesInput } from './competition-create-without-opportunities.input';
import { CompetitionCreateOrConnectWithoutOpportunitiesInput } from './competition-create-or-connect-without-opportunities.input';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';

@InputType()
export class CompetitionCreateNestedOneWithoutOpportunitiesInput {
  @Field(() => CompetitionCreateWithoutOpportunitiesInput, { nullable: true })
  @Type(() => CompetitionCreateWithoutOpportunitiesInput)
  create?: CompetitionCreateWithoutOpportunitiesInput;

  @Field(() => CompetitionCreateOrConnectWithoutOpportunitiesInput, { nullable: true })
  @Type(() => CompetitionCreateOrConnectWithoutOpportunitiesInput)
  connectOrCreate?: CompetitionCreateOrConnectWithoutOpportunitiesInput;

  @Field(() => CompetitionWhereUniqueInput, { nullable: true })
  @Type(() => CompetitionWhereUniqueInput)
  connect?: Prisma.AtLeast<CompetitionWhereUniqueInput, 'id'>;
}
