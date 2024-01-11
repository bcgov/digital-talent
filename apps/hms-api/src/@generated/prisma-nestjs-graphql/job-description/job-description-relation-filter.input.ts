import { Field, InputType } from '@nestjs/graphql';
import { JobDescriptionWhereInput } from './job-description-where.input';

@InputType()
export class JobDescriptionRelationFilter {
  @Field(() => JobDescriptionWhereInput, { nullable: true })
  is?: JobDescriptionWhereInput;

  @Field(() => JobDescriptionWhereInput, { nullable: true })
  isNot?: JobDescriptionWhereInput;
}
