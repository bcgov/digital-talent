import { Field, InputType } from '@nestjs/graphql';
import { ApplicationUncheckedUpdateManyWithoutApplicantNestedInput } from '../application/application-unchecked-update-many-without-applicant-nested.input';
import { CommentUncheckedUpdateManyWithoutUserNestedInput } from '../comment/comment-unchecked-update-many-without-user-nested.input';
import { CompetitionUncheckedUpdateManyWithoutRecruiterNestedInput } from '../competition/competition-unchecked-update-many-without-recruiter-nested.input';
import { IdentityUncheckedUpdateManyWithoutUserNestedInput } from '../identity/identity-unchecked-update-many-without-user-nested.input';
import { ElistUncheckedUpdateManyWithoutApplicantNestedInput } from '../elist/elist-unchecked-update-many-without-applicant-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutOpportunitiesInput {
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

  @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, { nullable: true })
  comments?: CommentUncheckedUpdateManyWithoutUserNestedInput;

  @Field(() => CompetitionUncheckedUpdateManyWithoutRecruiterNestedInput, { nullable: true })
  competitions?: CompetitionUncheckedUpdateManyWithoutRecruiterNestedInput;

  @Field(() => IdentityUncheckedUpdateManyWithoutUserNestedInput, { nullable: true })
  identities?: IdentityUncheckedUpdateManyWithoutUserNestedInput;

  @Field(() => ElistUncheckedUpdateManyWithoutApplicantNestedInput, { nullable: true })
  elist?: ElistUncheckedUpdateManyWithoutApplicantNestedInput;
}
