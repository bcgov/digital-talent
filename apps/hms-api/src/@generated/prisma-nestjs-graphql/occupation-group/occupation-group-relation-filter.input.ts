import { Field, InputType } from '@nestjs/graphql';
import { OccupationGroupWhereInput } from './occupation-group-where.input';

@InputType()
export class OccupationGroupRelationFilter {
  @Field(() => OccupationGroupWhereInput, { nullable: true })
  is?: OccupationGroupWhereInput;

  @Field(() => OccupationGroupWhereInput, { nullable: true })
  isNot?: OccupationGroupWhereInput;
}
