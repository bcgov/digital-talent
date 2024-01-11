import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { JobDescriptionWhereInput } from './job-description-where.input';

@ArgsType()
export class DeleteManyJobDescriptionArgs {
  @Field(() => JobDescriptionWhereInput, { nullable: true })
  @Type(() => JobDescriptionWhereInput)
  where?: JobDescriptionWhereInput;
}
