import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ClassificationUpdateOneRequiredWithoutJob_descriptionsNestedInput } from '../classification/classification-update-one-required-without-job-descriptions-nested.input';
import { CompetitionUpdateManyWithoutJob_descriptionNestedInput } from '../competition/competition-update-many-without-job-description-nested.input';

@InputType()
export class JobDescriptionUpdateInput {
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

  @Field(() => ClassificationUpdateOneRequiredWithoutJob_descriptionsNestedInput, { nullable: true })
  @Type(() => ClassificationUpdateOneRequiredWithoutJob_descriptionsNestedInput)
  classification?: ClassificationUpdateOneRequiredWithoutJob_descriptionsNestedInput;

  @Field(() => CompetitionUpdateManyWithoutJob_descriptionNestedInput, { nullable: true })
  Competition?: CompetitionUpdateManyWithoutJob_descriptionNestedInput;
}
