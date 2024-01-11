import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ApplicationWhereUniqueInput } from './application-where-unique.input';
import { ApplicationCreateWithoutApplicantInput } from './application-create-without-applicant.input';

@InputType()
export class ApplicationCreateOrConnectWithoutApplicantInput {
  @Field(() => ApplicationWhereUniqueInput, { nullable: false })
  @Type(() => ApplicationWhereUniqueInput)
  where!: Prisma.AtLeast<ApplicationWhereUniqueInput, 'id'>;

  @Field(() => ApplicationCreateWithoutApplicantInput, { nullable: false })
  @Type(() => ApplicationCreateWithoutApplicantInput)
  create!: ApplicationCreateWithoutApplicantInput;
}
