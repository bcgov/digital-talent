import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { JobDescriptionUpdateManyMutationInput } from './job-description-update-many-mutation.input';
import { JobDescriptionWhereInput } from './job-description-where.input';

@ArgsType()
export class UpdateManyJobDescriptionArgs {
  @Field(() => JobDescriptionUpdateManyMutationInput, { nullable: false })
  @Type(() => JobDescriptionUpdateManyMutationInput)
  data!: JobDescriptionUpdateManyMutationInput;

  @Field(() => JobDescriptionWhereInput, { nullable: true })
  @Type(() => JobDescriptionWhereInput)
  where?: JobDescriptionWhereInput;
}
