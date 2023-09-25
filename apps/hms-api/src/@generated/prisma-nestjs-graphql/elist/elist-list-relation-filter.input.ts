import { Field, InputType } from '@nestjs/graphql';
import { ElistWhereInput } from './elist-where.input';

@InputType()
export class ElistListRelationFilter {
  @Field(() => ElistWhereInput, { nullable: true })
  every?: ElistWhereInput;

  @Field(() => ElistWhereInput, { nullable: true })
  some?: ElistWhereInput;

  @Field(() => ElistWhereInput, { nullable: true })
  none?: ElistWhereInput;
}
