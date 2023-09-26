import { Field, InputType } from '@nestjs/graphql';
import { CommentUncheckedUpdateManyWithoutUserNestedInput } from '../comment/comment-unchecked-update-many-without-user-nested.input';
import { CompetitionUncheckedUpdateManyWithoutRecruiterNestedInput } from '../competition/competition-unchecked-update-many-without-recruiter-nested.input';
import { IdentityUncheckedUpdateManyWithoutUserNestedInput } from '../identity/identity-unchecked-update-many-without-user-nested.input';
import { ElistUncheckedUpdateManyWithoutApplicantNestedInput } from '../elist/elist-unchecked-update-many-without-applicant-nested.input';
import { OpportunityUncheckedUpdateManyWithoutHiring_managerNestedInput } from '../opportunity/opportunity-unchecked-update-many-without-hiring-manager-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutApplicationsInput {
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

  @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, { nullable: true })
  comments?: CommentUncheckedUpdateManyWithoutUserNestedInput;

  @Field(() => CompetitionUncheckedUpdateManyWithoutRecruiterNestedInput, { nullable: true })
  competitions?: CompetitionUncheckedUpdateManyWithoutRecruiterNestedInput;

  @Field(() => IdentityUncheckedUpdateManyWithoutUserNestedInput, { nullable: true })
  identities?: IdentityUncheckedUpdateManyWithoutUserNestedInput;

  @Field(() => ElistUncheckedUpdateManyWithoutApplicantNestedInput, { nullable: true })
  elist?: ElistUncheckedUpdateManyWithoutApplicantNestedInput;

  @Field(() => OpportunityUncheckedUpdateManyWithoutHiring_managerNestedInput, { nullable: true })
  opportunities?: OpportunityUncheckedUpdateManyWithoutHiring_managerNestedInput;
}
