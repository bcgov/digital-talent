import { Field, InputType } from '@nestjs/graphql';
import { CompetitionCategory } from './competition-category.enum';
import { IntFilter } from './int-filter.input';
import { EnumCompetitionCategoryFilter } from './enum-competition-category-filter.input';

@InputType()
export class EnumCompetitionCategoryWithAggregatesFilter {
  @Field(() => CompetitionCategory, { nullable: true })
  equals?: keyof typeof CompetitionCategory;

  @Field(() => [CompetitionCategory], { nullable: true })
  in?: Array<keyof typeof CompetitionCategory>;

  @Field(() => [CompetitionCategory], { nullable: true })
  notIn?: Array<keyof typeof CompetitionCategory>;

  @Field(() => EnumCompetitionCategoryWithAggregatesFilter, { nullable: true })
  not?: EnumCompetitionCategoryWithAggregatesFilter;

  @Field(() => IntFilter, { nullable: true })
  _count?: IntFilter;

  @Field(() => EnumCompetitionCategoryFilter, { nullable: true })
  _min?: EnumCompetitionCategoryFilter;

  @Field(() => EnumCompetitionCategoryFilter, { nullable: true })
  _max?: EnumCompetitionCategoryFilter;
}
