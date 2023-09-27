import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ElistCreateWithoutCompetitionInput } from './elist-create-without-competition.input';
import { ElistCreateOrConnectWithoutCompetitionInput } from './elist-create-or-connect-without-competition.input';
import { ElistUpsertWithWhereUniqueWithoutCompetitionInput } from './elist-upsert-with-where-unique-without-competition.input';
import { ElistCreateManyCompetitionInputEnvelope } from './elist-create-many-competition-input-envelope.input';
import { ElistWhereUniqueInput } from './elist-where-unique.input';
import { ElistUpdateWithWhereUniqueWithoutCompetitionInput } from './elist-update-with-where-unique-without-competition.input';
import { ElistUpdateManyWithWhereWithoutCompetitionInput } from './elist-update-many-with-where-without-competition.input';
import { ElistScalarWhereInput } from './elist-scalar-where.input';

@InputType()
export class ElistUpdateManyWithoutCompetitionNestedInput {
  @Field(() => [ElistCreateWithoutCompetitionInput], { nullable: true })
  @Type(() => ElistCreateWithoutCompetitionInput)
  create?: Array<ElistCreateWithoutCompetitionInput>;

  @Field(() => [ElistCreateOrConnectWithoutCompetitionInput], { nullable: true })
  @Type(() => ElistCreateOrConnectWithoutCompetitionInput)
  connectOrCreate?: Array<ElistCreateOrConnectWithoutCompetitionInput>;

  @Field(() => [ElistUpsertWithWhereUniqueWithoutCompetitionInput], { nullable: true })
  @Type(() => ElistUpsertWithWhereUniqueWithoutCompetitionInput)
  upsert?: Array<ElistUpsertWithWhereUniqueWithoutCompetitionInput>;

  @Field(() => ElistCreateManyCompetitionInputEnvelope, { nullable: true })
  @Type(() => ElistCreateManyCompetitionInputEnvelope)
  createMany?: ElistCreateManyCompetitionInputEnvelope;

  @Field(() => [ElistWhereUniqueInput], { nullable: true })
  @Type(() => ElistWhereUniqueInput)
  set?: Array<Prisma.AtLeast<ElistWhereUniqueInput, 'id'>>;

  @Field(() => [ElistWhereUniqueInput], { nullable: true })
  @Type(() => ElistWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<ElistWhereUniqueInput, 'id'>>;

  @Field(() => [ElistWhereUniqueInput], { nullable: true })
  @Type(() => ElistWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<ElistWhereUniqueInput, 'id'>>;

  @Field(() => [ElistWhereUniqueInput], { nullable: true })
  @Type(() => ElistWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ElistWhereUniqueInput, 'id'>>;

  @Field(() => [ElistUpdateWithWhereUniqueWithoutCompetitionInput], { nullable: true })
  @Type(() => ElistUpdateWithWhereUniqueWithoutCompetitionInput)
  update?: Array<ElistUpdateWithWhereUniqueWithoutCompetitionInput>;

  @Field(() => [ElistUpdateManyWithWhereWithoutCompetitionInput], { nullable: true })
  @Type(() => ElistUpdateManyWithWhereWithoutCompetitionInput)
  updateMany?: Array<ElistUpdateManyWithWhereWithoutCompetitionInput>;

  @Field(() => [ElistScalarWhereInput], { nullable: true })
  @Type(() => ElistScalarWhereInput)
  deleteMany?: Array<ElistScalarWhereInput>;
}
