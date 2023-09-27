import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ElistCreateManyApplicantInput } from './elist-create-many-applicant.input';

@InputType()
export class ElistCreateManyApplicantInputEnvelope {
  @Field(() => [ElistCreateManyApplicantInput], { nullable: false })
  @Type(() => ElistCreateManyApplicantInput)
  data!: Array<ElistCreateManyApplicantInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
