import { Field, InputType } from '@nestjs/graphql';
import { CompetitionState } from '../prisma/competition-state.enum';

@InputType()
export class CompetitionScheduleUncheckedCreateWithoutCompetitionInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => CompetitionState, { nullable: false })
  state!: keyof typeof CompetitionState;

  @Field(() => Date, { nullable: false })
  start_at!: Date | string;

  @Field(() => Date, { nullable: false })
  end_at!: Date | string;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;
}
