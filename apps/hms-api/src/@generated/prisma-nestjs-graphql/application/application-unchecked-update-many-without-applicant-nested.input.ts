import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ApplicationCreateWithoutApplicantInput } from './application-create-without-applicant.input';
import { ApplicationCreateOrConnectWithoutApplicantInput } from './application-create-or-connect-without-applicant.input';
import { ApplicationUpsertWithWhereUniqueWithoutApplicantInput } from './application-upsert-with-where-unique-without-applicant.input';
import { ApplicationCreateManyApplicantInputEnvelope } from './application-create-many-applicant-input-envelope.input';
import { ApplicationWhereUniqueInput } from './application-where-unique.input';
import { ApplicationUpdateWithWhereUniqueWithoutApplicantInput } from './application-update-with-where-unique-without-applicant.input';
import { ApplicationUpdateManyWithWhereWithoutApplicantInput } from './application-update-many-with-where-without-applicant.input';
import { ApplicationScalarWhereInput } from './application-scalar-where.input';

@InputType()
export class ApplicationUncheckedUpdateManyWithoutApplicantNestedInput {
  @Field(() => [ApplicationCreateWithoutApplicantInput], { nullable: true })
  @Type(() => ApplicationCreateWithoutApplicantInput)
  create?: Array<ApplicationCreateWithoutApplicantInput>;

  @Field(() => [ApplicationCreateOrConnectWithoutApplicantInput], { nullable: true })
  @Type(() => ApplicationCreateOrConnectWithoutApplicantInput)
  connectOrCreate?: Array<ApplicationCreateOrConnectWithoutApplicantInput>;

  @Field(() => [ApplicationUpsertWithWhereUniqueWithoutApplicantInput], { nullable: true })
  @Type(() => ApplicationUpsertWithWhereUniqueWithoutApplicantInput)
  upsert?: Array<ApplicationUpsertWithWhereUniqueWithoutApplicantInput>;

  @Field(() => ApplicationCreateManyApplicantInputEnvelope, { nullable: true })
  @Type(() => ApplicationCreateManyApplicantInputEnvelope)
  createMany?: ApplicationCreateManyApplicantInputEnvelope;

  @Field(() => [ApplicationWhereUniqueInput], { nullable: true })
  @Type(() => ApplicationWhereUniqueInput)
  set?: Array<Prisma.AtLeast<ApplicationWhereUniqueInput, 'id'>>;

  @Field(() => [ApplicationWhereUniqueInput], { nullable: true })
  @Type(() => ApplicationWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<ApplicationWhereUniqueInput, 'id'>>;

  @Field(() => [ApplicationWhereUniqueInput], { nullable: true })
  @Type(() => ApplicationWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<ApplicationWhereUniqueInput, 'id'>>;

  @Field(() => [ApplicationWhereUniqueInput], { nullable: true })
  @Type(() => ApplicationWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ApplicationWhereUniqueInput, 'id'>>;

  @Field(() => [ApplicationUpdateWithWhereUniqueWithoutApplicantInput], { nullable: true })
  @Type(() => ApplicationUpdateWithWhereUniqueWithoutApplicantInput)
  update?: Array<ApplicationUpdateWithWhereUniqueWithoutApplicantInput>;

  @Field(() => [ApplicationUpdateManyWithWhereWithoutApplicantInput], { nullable: true })
  @Type(() => ApplicationUpdateManyWithWhereWithoutApplicantInput)
  updateMany?: Array<ApplicationUpdateManyWithWhereWithoutApplicantInput>;

  @Field(() => [ApplicationScalarWhereInput], { nullable: true })
  @Type(() => ApplicationScalarWhereInput)
  deleteMany?: Array<ApplicationScalarWhereInput>;
}
