import { Field, ObjectType, ID } from '@nestjs/graphql';
import { CompetitionState } from '../prisma/competition-state.enum';
import { Competition } from '../competition/competition.model';

@ObjectType()
export class CompetitionSchedule {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  competition_id!: string;

  @Field(() => CompetitionState, { nullable: false })
  state!: keyof typeof CompetitionState;

  @Field(() => Date, { nullable: false })
  start_at!: Date;

  @Field(() => Date, { nullable: false })
  end_at!: Date;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: true })
  updated_at!: Date | null;

  @Field(() => Date, { nullable: true })
  deleted_at!: Date | null;

  @Field(() => Competition, { nullable: false })
  competition?: Competition;
}
