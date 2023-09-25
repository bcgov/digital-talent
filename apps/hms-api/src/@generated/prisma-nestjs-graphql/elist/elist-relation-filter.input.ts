import { Field, InputType } from '@nestjs/graphql';
import { ElistWhereInput } from './elist-where.input';

@InputType()
export class ElistRelationFilter {
  @Field(() => ElistWhereInput, { nullable: true })
  is?: ElistWhereInput;

  @Field(() => ElistWhereInput, { nullable: true })
  isNot?: ElistWhereInput;
}
