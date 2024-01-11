import { Field, InputType } from '@nestjs/graphql';
import { ApplicationLocationWhereInput } from './application-location-where.input';

@InputType()
export class ApplicationLocationListRelationFilter {
  @Field(() => ApplicationLocationWhereInput, { nullable: true })
  every?: ApplicationLocationWhereInput;

  @Field(() => ApplicationLocationWhereInput, { nullable: true })
  some?: ApplicationLocationWhereInput;

  @Field(() => ApplicationLocationWhereInput, { nullable: true })
  none?: ApplicationLocationWhereInput;
}
