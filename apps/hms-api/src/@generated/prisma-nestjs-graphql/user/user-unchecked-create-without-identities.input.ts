import { Field, InputType } from '@nestjs/graphql';
import { ApplicationUncheckedCreateNestedManyWithoutApplicantInput } from '../application/application-unchecked-create-nested-many-without-applicant.input';
import { CompetitionUncheckedCreateNestedManyWithoutRecruiterInput } from '../competition/competition-unchecked-create-nested-many-without-recruiter.input';
import { ElistUncheckedCreateNestedManyWithoutApplicantInput } from '../elist/elist-unchecked-create-nested-many-without-applicant.input';
import { CommentUncheckedCreateNestedManyWithoutUserInput } from '../comment/comment-unchecked-create-nested-many-without-user.input';
import { OpportunityUncheckedCreateNestedManyWithoutHiring_managerInput } from '../opportunity/opportunity-unchecked-create-nested-many-without-hiring-manager.input';

@InputType()
export class UserUncheckedCreateWithoutIdentitiesInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: true })
  deltek_id?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => [String], { nullable: true })
  roles?: Array<string>;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => ApplicationUncheckedCreateNestedManyWithoutApplicantInput, { nullable: true })
  applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput;

  @Field(() => CompetitionUncheckedCreateNestedManyWithoutRecruiterInput, { nullable: true })
  competitions?: CompetitionUncheckedCreateNestedManyWithoutRecruiterInput;

  @Field(() => ElistUncheckedCreateNestedManyWithoutApplicantInput, { nullable: true })
  elist?: ElistUncheckedCreateNestedManyWithoutApplicantInput;

  @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, { nullable: true })
  Comment?: CommentUncheckedCreateNestedManyWithoutUserInput;

  @Field(() => OpportunityUncheckedCreateNestedManyWithoutHiring_managerInput, { nullable: true })
  Opportunity?: OpportunityUncheckedCreateNestedManyWithoutHiring_managerInput;
}
