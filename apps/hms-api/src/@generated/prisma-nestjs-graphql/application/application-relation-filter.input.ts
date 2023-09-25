import { Field, InputType } from '@nestjs/graphql';
import { ApplicationWhereInput } from './application-where.input';

@InputType()
export class ApplicationRelationFilter {
  @Field(() => ApplicationWhereInput, { nullable: true })
  is?: ApplicationWhereInput;

  @Field(() => ApplicationWhereInput, { nullable: true })
  isNot?: ApplicationWhereInput;
}
