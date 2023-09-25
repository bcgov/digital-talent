import { Field, InputType } from '@nestjs/graphql';
import { ApplicationUncheckedUpdateManyWithoutApplicantNestedInput } from '../application/application-unchecked-update-many-without-applicant-nested.input';
import { CompetitionUncheckedUpdateManyWithoutRecruiterNestedInput } from '../competition/competition-unchecked-update-many-without-recruiter-nested.input';
import { ElistUncheckedUpdateManyWithoutApplicantNestedInput } from '../elist/elist-unchecked-update-many-without-applicant-nested.input';
import { CommentUncheckedUpdateManyWithoutUserNestedInput } from '../comment/comment-unchecked-update-many-without-user-nested.input';
import { OpportunityUncheckedUpdateManyWithoutHiring_managerNestedInput } from '../opportunity/opportunity-unchecked-update-many-without-hiring-manager-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutIdentitiesInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  deltek_id?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => [String], { nullable: true })
  roles?: Array<string>;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => ApplicationUncheckedUpdateManyWithoutApplicantNestedInput, { nullable: true })
  applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput;

  @Field(() => CompetitionUncheckedUpdateManyWithoutRecruiterNestedInput, { nullable: true })
  competitions?: CompetitionUncheckedUpdateManyWithoutRecruiterNestedInput;

  @Field(() => ElistUncheckedUpdateManyWithoutApplicantNestedInput, { nullable: true })
  elist?: ElistUncheckedUpdateManyWithoutApplicantNestedInput;

  @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, { nullable: true })
  Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput;

  @Field(() => OpportunityUncheckedUpdateManyWithoutHiring_managerNestedInput, { nullable: true })
  Opportunity?: OpportunityUncheckedUpdateManyWithoutHiring_managerNestedInput;
}
