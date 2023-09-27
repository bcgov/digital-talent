import { Field, InputType } from '@nestjs/graphql';
import { ApplicationWhereInput } from './application-where.input';

@InputType()
export class ApplicationListRelationFilter {
  @Field(() => ApplicationWhereInput, { nullable: true })
  every?: ApplicationWhereInput;

  @Field(() => ApplicationWhereInput, { nullable: true })
  some?: ApplicationWhereInput;

  @Field(() => ApplicationWhereInput, { nullable: true })
  none?: ApplicationWhereInput;
}
