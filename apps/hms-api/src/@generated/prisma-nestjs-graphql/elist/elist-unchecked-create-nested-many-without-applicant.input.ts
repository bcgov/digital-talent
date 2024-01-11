import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ElistCreateWithoutApplicantInput } from './elist-create-without-applicant.input';
import { ElistCreateOrConnectWithoutApplicantInput } from './elist-create-or-connect-without-applicant.input';
import { ElistCreateManyApplicantInputEnvelope } from './elist-create-many-applicant-input-envelope.input';
import { ElistWhereUniqueInput } from './elist-where-unique.input';

@InputType()
export class ElistUncheckedCreateNestedManyWithoutApplicantInput {
  @Field(() => [ElistCreateWithoutApplicantInput], { nullable: true })
  @Type(() => ElistCreateWithoutApplicantInput)
  create?: Array<ElistCreateWithoutApplicantInput>;

  @Field(() => [ElistCreateOrConnectWithoutApplicantInput], { nullable: true })
  @Type(() => ElistCreateOrConnectWithoutApplicantInput)
  connectOrCreate?: Array<ElistCreateOrConnectWithoutApplicantInput>;

  @Field(() => ElistCreateManyApplicantInputEnvelope, { nullable: true })
  @Type(() => ElistCreateManyApplicantInputEnvelope)
  createMany?: ElistCreateManyApplicantInputEnvelope;

  @Field(() => [ElistWhereUniqueInput], { nullable: true })
  @Type(() => ElistWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ElistWhereUniqueInput, 'id'>>;
}
