import { Field, InputType } from '@nestjs/graphql';
import { CompetitionState } from './competition-state.enum';

@InputType()
export class EnumCompetitionStateFilter {
  @Field(() => CompetitionState, { nullable: true })
  equals?: keyof typeof CompetitionState;

  @Field(() => [CompetitionState], { nullable: true })
  in?: Array<keyof typeof CompetitionState>;

  @Field(() => [CompetitionState], { nullable: true })
  notIn?: Array<keyof typeof CompetitionState>;

  @Field(() => EnumCompetitionStateFilter, { nullable: true })
  not?: EnumCompetitionStateFilter;
}
