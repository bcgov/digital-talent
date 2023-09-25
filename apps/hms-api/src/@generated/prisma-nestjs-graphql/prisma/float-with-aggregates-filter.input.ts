import { Field, InputType, Float } from '@nestjs/graphql';
import { IntFilter } from './int-filter.input';
import { FloatFilter } from './float-filter.input';

@InputType()
export class FloatWithAggregatesFilter {
  @Field(() => Float, { nullable: true })
  equals?: number;

  @Field(() => [Float], { nullable: true })
  in?: Array<number>;

  @Field(() => [Float], { nullable: true })
  notIn?: Array<number>;

  @Field(() => Float, { nullable: true })
  lt?: number;

  @Field(() => Float, { nullable: true })
  lte?: number;

  @Field(() => Float, { nullable: true })
  gt?: number;

  @Field(() => Float, { nullable: true })
  gte?: number;

  @Field(() => FloatWithAggregatesFilter, { nullable: true })
  not?: FloatWithAggregatesFilter;

  @Field(() => IntFilter, { nullable: true })
  _count?: IntFilter;

  @Field(() => FloatFilter, { nullable: true })
  _avg?: FloatFilter;

  @Field(() => FloatFilter, { nullable: true })
  _sum?: FloatFilter;

  @Field(() => FloatFilter, { nullable: true })
  _min?: FloatFilter;

  @Field(() => FloatFilter, { nullable: true })
  _max?: FloatFilter;
}
