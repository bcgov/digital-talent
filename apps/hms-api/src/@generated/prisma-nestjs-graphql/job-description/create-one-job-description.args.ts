import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { JobDescriptionCreateInput } from './job-description-create.input';

@ArgsType()
export class CreateOneJobDescriptionArgs {
  @Field(() => JobDescriptionCreateInput, { nullable: false })
  @Type(() => JobDescriptionCreateInput)
  data!: JobDescriptionCreateInput;
}
