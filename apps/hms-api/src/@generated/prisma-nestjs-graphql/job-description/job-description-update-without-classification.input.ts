import { Field, InputType } from '@nestjs/graphql';
import { CompetitionUpdateManyWithoutJob_descriptionNestedInput } from '../competition/competition-update-many-without-job-description-nested.input';

@InputType()
export class JobDescriptionUpdateWithoutClassificationInput {
  @Field(() => String, { nullable: true })
  id?: string;

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

  @Field(() => CompetitionUpdateManyWithoutJob_descriptionNestedInput, { nullable: true })
  Competition?: CompetitionUpdateManyWithoutJob_descriptionNestedInput;
}
