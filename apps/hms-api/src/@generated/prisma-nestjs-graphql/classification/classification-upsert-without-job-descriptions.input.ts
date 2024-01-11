import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ClassificationUpdateWithoutJob_descriptionsInput } from './classification-update-without-job-descriptions.input';
import { ClassificationCreateWithoutJob_descriptionsInput } from './classification-create-without-job-descriptions.input';
import { ClassificationWhereInput } from './classification-where.input';

@InputType()
export class ClassificationUpsertWithoutJob_descriptionsInput {
  @Field(() => ClassificationUpdateWithoutJob_descriptionsInput, { nullable: false })
  @Type(() => ClassificationUpdateWithoutJob_descriptionsInput)
  update!: ClassificationUpdateWithoutJob_descriptionsInput;

  @Field(() => ClassificationCreateWithoutJob_descriptionsInput, { nullable: false })
  @Type(() => ClassificationCreateWithoutJob_descriptionsInput)
  create!: ClassificationCreateWithoutJob_descriptionsInput;

  @Field(() => ClassificationWhereInput, { nullable: true })
  @Type(() => ClassificationWhereInput)
  where?: ClassificationWhereInput;
}
