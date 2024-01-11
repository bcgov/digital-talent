import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ApplicationCreateManyApplicantInput } from './application-create-many-applicant.input';

@InputType()
export class ApplicationCreateManyApplicantInputEnvelope {
  @Field(() => [ApplicationCreateManyApplicantInput], { nullable: false })
  @Type(() => ApplicationCreateManyApplicantInput)
  data!: Array<ApplicationCreateManyApplicantInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
