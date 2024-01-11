import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { OpportunityWhereUniqueInput } from './opportunity-where-unique.input';
import { OpportunityCreateWithoutCompetitionInput } from './opportunity-create-without-competition.input';

@InputType()
export class OpportunityCreateOrConnectWithoutCompetitionInput {
  @Field(() => OpportunityWhereUniqueInput, { nullable: false })
  @Type(() => OpportunityWhereUniqueInput)
  where!: Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>;

  @Field(() => OpportunityCreateWithoutCompetitionInput, { nullable: false })
  @Type(() => OpportunityCreateWithoutCompetitionInput)
  create!: OpportunityCreateWithoutCompetitionInput;
}
