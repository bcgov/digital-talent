import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ClassificationWhereInput } from './classification-where.input';
import { ClassificationUpdateWithoutJob_descriptionsInput } from './classification-update-without-job-descriptions.input';

@InputType()
export class ClassificationUpdateToOneWithWhereWithoutJob_descriptionsInput {
  @Field(() => ClassificationWhereInput, { nullable: true })
  @Type(() => ClassificationWhereInput)
  where?: ClassificationWhereInput;

  @Field(() => ClassificationUpdateWithoutJob_descriptionsInput, { nullable: false })
  @Type(() => ClassificationUpdateWithoutJob_descriptionsInput)
  data!: ClassificationUpdateWithoutJob_descriptionsInput;
}
