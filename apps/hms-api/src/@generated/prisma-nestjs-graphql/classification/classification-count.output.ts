import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class ClassificationCount {
  @Field(() => Int, { nullable: false })
  job_descriptions?: number;
}
