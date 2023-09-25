import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { OpportunityWhereUniqueInput } from './opportunity-where-unique.input';
import { OpportunityUpdateWithoutCompetitionInput } from './opportunity-update-without-competition.input';

@InputType()
export class OpportunityUpdateWithWhereUniqueWithoutCompetitionInput {
  @Field(() => OpportunityWhereUniqueInput, { nullable: false })
  @Type(() => OpportunityWhereUniqueInput)
  where!: Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>;

  @Field(() => OpportunityUpdateWithoutCompetitionInput, { nullable: false })
  @Type(() => OpportunityUpdateWithoutCompetitionInput)
  data!: OpportunityUpdateWithoutCompetitionInput;
}
