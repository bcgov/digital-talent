import { Field, InputType } from '@nestjs/graphql';
import { CompetitionState } from '../prisma/competition-state.enum';

@InputType()
export class CompetitionScheduleUpdateWithoutCompetitionInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => CompetitionState, { nullable: true })
  state?: keyof typeof CompetitionState;

  @Field(() => Date, { nullable: true })
  start_at?: Date | string;

  @Field(() => Date, { nullable: true })
  end_at?: Date | string;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;
}
