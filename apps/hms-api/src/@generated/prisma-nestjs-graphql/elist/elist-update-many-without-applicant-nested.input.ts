import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ElistCreateWithoutApplicantInput } from './elist-create-without-applicant.input';
import { ElistCreateOrConnectWithoutApplicantInput } from './elist-create-or-connect-without-applicant.input';
import { ElistUpsertWithWhereUniqueWithoutApplicantInput } from './elist-upsert-with-where-unique-without-applicant.input';
import { ElistCreateManyApplicantInputEnvelope } from './elist-create-many-applicant-input-envelope.input';
import { ElistWhereUniqueInput } from './elist-where-unique.input';
import { ElistUpdateWithWhereUniqueWithoutApplicantInput } from './elist-update-with-where-unique-without-applicant.input';
import { ElistUpdateManyWithWhereWithoutApplicantInput } from './elist-update-many-with-where-without-applicant.input';
import { ElistScalarWhereInput } from './elist-scalar-where.input';

@InputType()
export class ElistUpdateManyWithoutApplicantNestedInput {
  @Field(() => [ElistCreateWithoutApplicantInput], { nullable: true })
  @Type(() => ElistCreateWithoutApplicantInput)
  create?: Array<ElistCreateWithoutApplicantInput>;

  @Field(() => [ElistCreateOrConnectWithoutApplicantInput], { nullable: true })
  @Type(() => ElistCreateOrConnectWithoutApplicantInput)
  connectOrCreate?: Array<ElistCreateOrConnectWithoutApplicantInput>;

  @Field(() => [ElistUpsertWithWhereUniqueWithoutApplicantInput], { nullable: true })
  @Type(() => ElistUpsertWithWhereUniqueWithoutApplicantInput)
  upsert?: Array<ElistUpsertWithWhereUniqueWithoutApplicantInput>;

  @Field(() => ElistCreateManyApplicantInputEnvelope, { nullable: true })
  @Type(() => ElistCreateManyApplicantInputEnvelope)
  createMany?: ElistCreateManyApplicantInputEnvelope;

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

  @Field(() => [ElistUpdateWithWhereUniqueWithoutApplicantInput], { nullable: true })
  @Type(() => ElistUpdateWithWhereUniqueWithoutApplicantInput)
  update?: Array<ElistUpdateWithWhereUniqueWithoutApplicantInput>;

  @Field(() => [ElistUpdateManyWithWhereWithoutApplicantInput], { nullable: true })
  @Type(() => ElistUpdateManyWithWhereWithoutApplicantInput)
  updateMany?: Array<ElistUpdateManyWithWhereWithoutApplicantInput>;

  @Field(() => [ElistScalarWhereInput], { nullable: true })
  @Type(() => ElistScalarWhereInput)
  deleteMany?: Array<ElistScalarWhereInput>;
}
