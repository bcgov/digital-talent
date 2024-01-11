import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ClassificationCreateNestedOneWithoutJob_descriptionsInput } from '../classification/classification-create-nested-one-without-job-descriptions.input';

@InputType()
export class JobDescriptionCreateWithoutCompetitionsInput {
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

  @Field(() => ClassificationCreateNestedOneWithoutJob_descriptionsInput, { nullable: false })
  @Type(() => ClassificationCreateNestedOneWithoutJob_descriptionsInput)
  classification!: ClassificationCreateNestedOneWithoutJob_descriptionsInput;
}
