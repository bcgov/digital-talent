import { Field, InputType } from '@nestjs/graphql';
import { WorkOption } from './work-option.enum';
import { IntFilter } from './int-filter.input';
import { EnumWorkOptionFilter } from './enum-work-option-filter.input';

@InputType()
export class EnumWorkOptionWithAggregatesFilter {
  @Field(() => WorkOption, { nullable: true })
  equals?: keyof typeof WorkOption;

  @Field(() => [WorkOption], { nullable: true })
  in?: Array<keyof typeof WorkOption>;

  @Field(() => [WorkOption], { nullable: true })
  notIn?: Array<keyof typeof WorkOption>;

  @Field(() => EnumWorkOptionWithAggregatesFilter, { nullable: true })
  not?: EnumWorkOptionWithAggregatesFilter;

  @Field(() => IntFilter, { nullable: true })
  _count?: IntFilter;

  @Field(() => EnumWorkOptionFilter, { nullable: true })
  _min?: EnumWorkOptionFilter;

  @Field(() => EnumWorkOptionFilter, { nullable: true })
  _max?: EnumWorkOptionFilter;
}
