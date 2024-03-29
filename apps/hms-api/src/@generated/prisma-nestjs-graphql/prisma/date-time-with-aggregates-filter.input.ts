import { Field, InputType } from '@nestjs/graphql';
import { IntFilter } from './int-filter.input';
import { DateTimeFilter } from './date-time-filter.input';

@InputType()
export class DateTimeWithAggregatesFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;

  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;

  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;

  @Field(() => Date, { nullable: true })
  lt?: Date | string;

  @Field(() => Date, { nullable: true })
  lte?: Date | string;

  @Field(() => Date, { nullable: true })
  gt?: Date | string;

  @Field(() => Date, { nullable: true })
  gte?: Date | string;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  not?: DateTimeWithAggregatesFilter;

  @Field(() => IntFilter, { nullable: true })
  _count?: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  _min?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  _max?: DateTimeFilter;
}
