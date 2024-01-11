import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { JobDescriptionCreateManyInput } from './job-description-create-many.input';

@ArgsType()
export class CreateManyJobDescriptionArgs {
  @Field(() => [JobDescriptionCreateManyInput], { nullable: false })
  @Type(() => JobDescriptionCreateManyInput)
  data!: Array<JobDescriptionCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
