import { Field, InputType } from '@nestjs/graphql';
import { CompetitionCategory } from './competition-category.enum';

@InputType()
export class EnumCompetitionCategoryFilter {
  @Field(() => CompetitionCategory, { nullable: true })
  equals?: keyof typeof CompetitionCategory;

  @Field(() => [CompetitionCategory], { nullable: true })
  in?: Array<keyof typeof CompetitionCategory>;

  @Field(() => [CompetitionCategory], { nullable: true })
  notIn?: Array<keyof typeof CompetitionCategory>;

  @Field(() => EnumCompetitionCategoryFilter, { nullable: true })
  not?: EnumCompetitionCategoryFilter;
}
