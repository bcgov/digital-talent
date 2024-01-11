import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OpportunityCreateWithoutCompetitionInput } from './opportunity-create-without-competition.input';
import { OpportunityCreateOrConnectWithoutCompetitionInput } from './opportunity-create-or-connect-without-competition.input';
import { OpportunityCreateManyCompetitionInputEnvelope } from './opportunity-create-many-competition-input-envelope.input';
import { OpportunityWhereUniqueInput } from './opportunity-where-unique.input';

@InputType()
export class OpportunityCreateNestedManyWithoutCompetitionInput {
  @Field(() => [OpportunityCreateWithoutCompetitionInput], { nullable: true })
  @Type(() => OpportunityCreateWithoutCompetitionInput)
  create?: Array<OpportunityCreateWithoutCompetitionInput>;

  @Field(() => [OpportunityCreateOrConnectWithoutCompetitionInput], { nullable: true })
  @Type(() => OpportunityCreateOrConnectWithoutCompetitionInput)
  connectOrCreate?: Array<OpportunityCreateOrConnectWithoutCompetitionInput>;

  @Field(() => OpportunityCreateManyCompetitionInputEnvelope, { nullable: true })
  @Type(() => OpportunityCreateManyCompetitionInputEnvelope)
  createMany?: OpportunityCreateManyCompetitionInputEnvelope;

  @Field(() => [OpportunityWhereUniqueInput], { nullable: true })
  @Type(() => OpportunityWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>>;
}
