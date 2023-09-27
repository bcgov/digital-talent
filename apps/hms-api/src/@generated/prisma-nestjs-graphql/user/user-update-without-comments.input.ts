import { Field, InputType } from '@nestjs/graphql';
import { ApplicationUpdateManyWithoutApplicantNestedInput } from '../application/application-update-many-without-applicant-nested.input';
import { CompetitionUpdateManyWithoutRecruiterNestedInput } from '../competition/competition-update-many-without-recruiter-nested.input';
import { IdentityUpdateManyWithoutUserNestedInput } from '../identity/identity-update-many-without-user-nested.input';
import { ElistUpdateManyWithoutApplicantNestedInput } from '../elist/elist-update-many-without-applicant-nested.input';
import { OpportunityUpdateManyWithoutHiring_managerNestedInput } from '../opportunity/opportunity-update-many-without-hiring-manager-nested.input';

@InputType()
export class UserUpdateWithoutCommentsInput {
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

  @Field(() => ApplicationUpdateManyWithoutApplicantNestedInput, { nullable: true })
  applications?: ApplicationUpdateManyWithoutApplicantNestedInput;

  @Field(() => CompetitionUpdateManyWithoutRecruiterNestedInput, { nullable: true })
  competitions?: CompetitionUpdateManyWithoutRecruiterNestedInput;

  @Field(() => IdentityUpdateManyWithoutUserNestedInput, { nullable: true })
  identities?: IdentityUpdateManyWithoutUserNestedInput;

  @Field(() => ElistUpdateManyWithoutApplicantNestedInput, { nullable: true })
  elist?: ElistUpdateManyWithoutApplicantNestedInput;

  @Field(() => OpportunityUpdateManyWithoutHiring_managerNestedInput, { nullable: true })
  opportunities?: OpportunityUpdateManyWithoutHiring_managerNestedInput;
}
