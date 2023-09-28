import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionScheduleCreateManyCompetitionInput } from './competition-schedule-create-many-competition.input';

@InputType()
export class CompetitionScheduleCreateManyCompetitionInputEnvelope {
  @Field(() => [CompetitionScheduleCreateManyCompetitionInput], { nullable: false })
  @Type(() => CompetitionScheduleCreateManyCompetitionInput)
  data!: Array<CompetitionScheduleCreateManyCompetitionInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
