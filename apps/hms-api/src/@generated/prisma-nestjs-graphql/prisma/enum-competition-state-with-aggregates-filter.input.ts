import { Field, InputType } from '@nestjs/graphql';
import { CompetitionState } from './competition-state.enum';
import { IntFilter } from './int-filter.input';
import { EnumCompetitionStateFilter } from './enum-competition-state-filter.input';

@InputType()
export class EnumCompetitionStateWithAggregatesFilter {
  @Field(() => CompetitionState, { nullable: true })
  equals?: keyof typeof CompetitionState;

  @Field(() => [CompetitionState], { nullable: true })
  in?: Array<keyof typeof CompetitionState>;

  @Field(() => [CompetitionState], { nullable: true })
  notIn?: Array<keyof typeof CompetitionState>;

  @Field(() => EnumCompetitionStateWithAggregatesFilter, { nullable: true })
  not?: EnumCompetitionStateWithAggregatesFilter;

  @Field(() => IntFilter, { nullable: true })
  _count?: IntFilter;

  @Field(() => EnumCompetitionStateFilter, { nullable: true })
  _min?: EnumCompetitionStateFilter;

  @Field(() => EnumCompetitionStateFilter, { nullable: true })
  _max?: EnumCompetitionStateFilter;
}
