import { Field, InputType } from '@nestjs/graphql';
import { CompetitionState } from '../prisma/competition-state.enum';
import { CompetitionUpdateOneRequiredWithoutScheduleNestedInput } from '../competition/competition-update-one-required-without-schedule-nested.input';

@InputType()
export class CompetitionScheduleUpdateInput {
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

  @Field(() => CompetitionUpdateOneRequiredWithoutScheduleNestedInput, { nullable: true })
  competition?: CompetitionUpdateOneRequiredWithoutScheduleNestedInput;
}
