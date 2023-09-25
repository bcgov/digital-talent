import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { JobDescriptionCreateManyClassificationInput } from './job-description-create-many-classification.input';

@InputType()
export class JobDescriptionCreateManyClassificationInputEnvelope {
  @Field(() => [JobDescriptionCreateManyClassificationInput], { nullable: false })
  @Type(() => JobDescriptionCreateManyClassificationInput)
  data!: Array<JobDescriptionCreateManyClassificationInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
