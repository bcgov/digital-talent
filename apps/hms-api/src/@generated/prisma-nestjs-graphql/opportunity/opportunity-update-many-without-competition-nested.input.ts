import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OpportunityCreateWithoutCompetitionInput } from './opportunity-create-without-competition.input';
import { OpportunityCreateOrConnectWithoutCompetitionInput } from './opportunity-create-or-connect-without-competition.input';
import { OpportunityUpsertWithWhereUniqueWithoutCompetitionInput } from './opportunity-upsert-with-where-unique-without-competition.input';
import { OpportunityCreateManyCompetitionInputEnvelope } from './opportunity-create-many-competition-input-envelope.input';
import { OpportunityWhereUniqueInput } from './opportunity-where-unique.input';
import { OpportunityUpdateWithWhereUniqueWithoutCompetitionInput } from './opportunity-update-with-where-unique-without-competition.input';
import { OpportunityUpdateManyWithWhereWithoutCompetitionInput } from './opportunity-update-many-with-where-without-competition.input';
import { OpportunityScalarWhereInput } from './opportunity-scalar-where.input';

@InputType()
export class OpportunityUpdateManyWithoutCompetitionNestedInput {
  @Field(() => [OpportunityCreateWithoutCompetitionInput], { nullable: true })
  @Type(() => OpportunityCreateWithoutCompetitionInput)
  create?: Array<OpportunityCreateWithoutCompetitionInput>;

  @Field(() => [OpportunityCreateOrConnectWithoutCompetitionInput], { nullable: true })
  @Type(() => OpportunityCreateOrConnectWithoutCompetitionInput)
  connectOrCreate?: Array<OpportunityCreateOrConnectWithoutCompetitionInput>;

  @Field(() => [OpportunityUpsertWithWhereUniqueWithoutCompetitionInput], { nullable: true })
  @Type(() => OpportunityUpsertWithWhereUniqueWithoutCompetitionInput)
  upsert?: Array<OpportunityUpsertWithWhereUniqueWithoutCompetitionInput>;

  @Field(() => OpportunityCreateManyCompetitionInputEnvelope, { nullable: true })
  @Type(() => OpportunityCreateManyCompetitionInputEnvelope)
  createMany?: OpportunityCreateManyCompetitionInputEnvelope;

  @Field(() => [OpportunityWhereUniqueInput], { nullable: true })
  @Type(() => OpportunityWhereUniqueInput)
  set?: Array<Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>>;

  @Field(() => [OpportunityWhereUniqueInput], { nullable: true })
  @Type(() => OpportunityWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>>;

  @Field(() => [OpportunityWhereUniqueInput], { nullable: true })
  @Type(() => OpportunityWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>>;

  @Field(() => [OpportunityWhereUniqueInput], { nullable: true })
  @Type(() => OpportunityWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>>;

  @Field(() => [OpportunityUpdateWithWhereUniqueWithoutCompetitionInput], { nullable: true })
  @Type(() => OpportunityUpdateWithWhereUniqueWithoutCompetitionInput)
  update?: Array<OpportunityUpdateWithWhereUniqueWithoutCompetitionInput>;

  @Field(() => [OpportunityUpdateManyWithWhereWithoutCompetitionInput], { nullable: true })
  @Type(() => OpportunityUpdateManyWithWhereWithoutCompetitionInput)
  updateMany?: Array<OpportunityUpdateManyWithWhereWithoutCompetitionInput>;

  @Field(() => [OpportunityScalarWhereInput], { nullable: true })
  @Type(() => OpportunityScalarWhereInput)
  deleteMany?: Array<OpportunityScalarWhereInput>;
}
