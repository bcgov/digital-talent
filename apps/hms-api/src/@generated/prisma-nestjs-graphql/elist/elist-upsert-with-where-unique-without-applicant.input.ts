import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ElistWhereUniqueInput } from './elist-where-unique.input';
import { ElistUpdateWithoutApplicantInput } from './elist-update-without-applicant.input';
import { ElistCreateWithoutApplicantInput } from './elist-create-without-applicant.input';

@InputType()
export class ElistUpsertWithWhereUniqueWithoutApplicantInput {
  @Field(() => ElistWhereUniqueInput, { nullable: false })
  @Type(() => ElistWhereUniqueInput)
  where!: Prisma.AtLeast<ElistWhereUniqueInput, 'id'>;

  @Field(() => ElistUpdateWithoutApplicantInput, { nullable: false })
  @Type(() => ElistUpdateWithoutApplicantInput)
  update!: ElistUpdateWithoutApplicantInput;

  @Field(() => ElistCreateWithoutApplicantInput, { nullable: false })
  @Type(() => ElistCreateWithoutApplicantInput)
  create!: ElistCreateWithoutApplicantInput;
}
