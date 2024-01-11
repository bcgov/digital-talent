import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ElistCreateWithoutCompetitionInput } from './elist-create-without-competition.input';
import { ElistCreateOrConnectWithoutCompetitionInput } from './elist-create-or-connect-without-competition.input';
import { ElistCreateManyCompetitionInputEnvelope } from './elist-create-many-competition-input-envelope.input';
import { ElistWhereUniqueInput } from './elist-where-unique.input';

@InputType()
export class ElistUncheckedCreateNestedManyWithoutCompetitionInput {
  @Field(() => [ElistCreateWithoutCompetitionInput], { nullable: true })
  @Type(() => ElistCreateWithoutCompetitionInput)
  create?: Array<ElistCreateWithoutCompetitionInput>;

  @Field(() => [ElistCreateOrConnectWithoutCompetitionInput], { nullable: true })
  @Type(() => ElistCreateOrConnectWithoutCompetitionInput)
  connectOrCreate?: Array<ElistCreateOrConnectWithoutCompetitionInput>;

  @Field(() => ElistCreateManyCompetitionInputEnvelope, { nullable: true })
  @Type(() => ElistCreateManyCompetitionInputEnvelope)
  createMany?: ElistCreateManyCompetitionInputEnvelope;

  @Field(() => [ElistWhereUniqueInput], { nullable: true })
  @Type(() => ElistWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ElistWhereUniqueInput, 'id'>>;
}
