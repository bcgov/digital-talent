import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { JobDescriptionScalarWhereInput } from './job-description-scalar-where.input';
import { JobDescriptionUpdateManyMutationInput } from './job-description-update-many-mutation.input';

@InputType()
export class JobDescriptionUpdateManyWithWhereWithoutClassificationInput {
  @Field(() => JobDescriptionScalarWhereInput, { nullable: false })
  @Type(() => JobDescriptionScalarWhereInput)
  where!: JobDescriptionScalarWhereInput;

  @Field(() => JobDescriptionUpdateManyMutationInput, { nullable: false })
  @Type(() => JobDescriptionUpdateManyMutationInput)
  data!: JobDescriptionUpdateManyMutationInput;
}
