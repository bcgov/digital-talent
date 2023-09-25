import { Field, InputType } from '@nestjs/graphql';
import { CompetitionUncheckedCreateNestedManyWithoutJob_descriptionInput } from '../competition/competition-unchecked-create-nested-many-without-job-description.input';

@InputType()
export class JobDescriptionUncheckedCreateWithoutClassificationInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: true })
  e_class_id?: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => CompetitionUncheckedCreateNestedManyWithoutJob_descriptionInput, { nullable: true })
  Competition?: CompetitionUncheckedCreateNestedManyWithoutJob_descriptionInput;
}
