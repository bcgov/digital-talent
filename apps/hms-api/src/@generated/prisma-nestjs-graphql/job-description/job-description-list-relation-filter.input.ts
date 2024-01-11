import { Field, InputType } from '@nestjs/graphql';
import { JobDescriptionWhereInput } from './job-description-where.input';

@InputType()
export class JobDescriptionListRelationFilter {
  @Field(() => JobDescriptionWhereInput, { nullable: true })
  every?: JobDescriptionWhereInput;

  @Field(() => JobDescriptionWhereInput, { nullable: true })
  some?: JobDescriptionWhereInput;

  @Field(() => JobDescriptionWhereInput, { nullable: true })
  none?: JobDescriptionWhereInput;
}
