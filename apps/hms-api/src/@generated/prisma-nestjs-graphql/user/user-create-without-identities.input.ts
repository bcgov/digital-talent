import { Field, InputType } from '@nestjs/graphql';
import { ApplicationCreateNestedManyWithoutApplicantInput } from '../application/application-create-nested-many-without-applicant.input';
import { CommentCreateNestedManyWithoutUserInput } from '../comment/comment-create-nested-many-without-user.input';
import { CompetitionCreateNestedManyWithoutRecruiterInput } from '../competition/competition-create-nested-many-without-recruiter.input';
import { ElistCreateNestedManyWithoutApplicantInput } from '../elist/elist-create-nested-many-without-applicant.input';
import { OpportunityCreateNestedManyWithoutHiring_managerInput } from '../opportunity/opportunity-create-nested-many-without-hiring-manager.input';

@InputType()
export class UserCreateWithoutIdentitiesInput {
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

  @Field(() => ApplicationCreateNestedManyWithoutApplicantInput, { nullable: true })
  applications?: ApplicationCreateNestedManyWithoutApplicantInput;

  @Field(() => CommentCreateNestedManyWithoutUserInput, { nullable: true })
  comments?: CommentCreateNestedManyWithoutUserInput;

  @Field(() => CompetitionCreateNestedManyWithoutRecruiterInput, { nullable: true })
  competitions?: CompetitionCreateNestedManyWithoutRecruiterInput;

  @Field(() => ElistCreateNestedManyWithoutApplicantInput, { nullable: true })
  elist?: ElistCreateNestedManyWithoutApplicantInput;

  @Field(() => OpportunityCreateNestedManyWithoutHiring_managerInput, { nullable: true })
  opportunities?: OpportunityCreateNestedManyWithoutHiring_managerInput;
}
