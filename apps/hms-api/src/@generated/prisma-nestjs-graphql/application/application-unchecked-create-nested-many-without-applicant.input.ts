import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ApplicationCreateWithoutApplicantInput } from './application-create-without-applicant.input';
import { ApplicationCreateOrConnectWithoutApplicantInput } from './application-create-or-connect-without-applicant.input';
import { ApplicationCreateManyApplicantInputEnvelope } from './application-create-many-applicant-input-envelope.input';
import { ApplicationWhereUniqueInput } from './application-where-unique.input';

@InputType()
export class ApplicationUncheckedCreateNestedManyWithoutApplicantInput {
  @Field(() => [ApplicationCreateWithoutApplicantInput], { nullable: true })
  @Type(() => ApplicationCreateWithoutApplicantInput)
  create?: Array<ApplicationCreateWithoutApplicantInput>;

  @Field(() => [ApplicationCreateOrConnectWithoutApplicantInput], { nullable: true })
  @Type(() => ApplicationCreateOrConnectWithoutApplicantInput)
  connectOrCreate?: Array<ApplicationCreateOrConnectWithoutApplicantInput>;

  @Field(() => ApplicationCreateManyApplicantInputEnvelope, { nullable: true })
  @Type(() => ApplicationCreateManyApplicantInputEnvelope)
  createMany?: ApplicationCreateManyApplicantInputEnvelope;

  @Field(() => [ApplicationWhereUniqueInput], { nullable: true })
  @Type(() => ApplicationWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ApplicationWhereUniqueInput, 'id'>>;
}
