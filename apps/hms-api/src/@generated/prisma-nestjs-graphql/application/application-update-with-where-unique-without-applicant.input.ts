import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ApplicationWhereUniqueInput } from './application-where-unique.input';
import { ApplicationUpdateWithoutApplicantInput } from './application-update-without-applicant.input';

@InputType()
export class ApplicationUpdateWithWhereUniqueWithoutApplicantInput {
  @Field(() => ApplicationWhereUniqueInput, { nullable: false })
  @Type(() => ApplicationWhereUniqueInput)
  where!: Prisma.AtLeast<ApplicationWhereUniqueInput, 'id'>;

  @Field(() => ApplicationUpdateWithoutApplicantInput, { nullable: false })
  @Type(() => ApplicationUpdateWithoutApplicantInput)
  data!: ApplicationUpdateWithoutApplicantInput;
}
