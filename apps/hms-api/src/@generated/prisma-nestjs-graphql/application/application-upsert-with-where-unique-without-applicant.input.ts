import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ApplicationWhereUniqueInput } from './application-where-unique.input';
import { ApplicationUpdateWithoutApplicantInput } from './application-update-without-applicant.input';
import { ApplicationCreateWithoutApplicantInput } from './application-create-without-applicant.input';

@InputType()
export class ApplicationUpsertWithWhereUniqueWithoutApplicantInput {
  @Field(() => ApplicationWhereUniqueInput, { nullable: false })
  @Type(() => ApplicationWhereUniqueInput)
  where!: Prisma.AtLeast<ApplicationWhereUniqueInput, 'id'>;

  @Field(() => ApplicationUpdateWithoutApplicantInput, { nullable: false })
  @Type(() => ApplicationUpdateWithoutApplicantInput)
  update!: ApplicationUpdateWithoutApplicantInput;

  @Field(() => ApplicationCreateWithoutApplicantInput, { nullable: false })
  @Type(() => ApplicationCreateWithoutApplicantInput)
  create!: ApplicationCreateWithoutApplicantInput;
}
