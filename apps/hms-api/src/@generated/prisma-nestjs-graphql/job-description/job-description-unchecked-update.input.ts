import { Field, InputType } from '@nestjs/graphql';
import { CompetitionUncheckedUpdateManyWithoutJob_descriptionNestedInput } from '../competition/competition-unchecked-update-many-without-job-description-nested.input';

@InputType()
export class JobDescriptionUncheckedUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  classification_id?: string;

  @Field(() => String, { nullable: true })
  e_class_id?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => CompetitionUncheckedUpdateManyWithoutJob_descriptionNestedInput, { nullable: true })
  competitions?: CompetitionUncheckedUpdateManyWithoutJob_descriptionNestedInput;
}
