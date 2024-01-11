import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionScheduleCreateManyInput } from './competition-schedule-create-many.input';

@ArgsType()
export class CreateManyCompetitionScheduleArgs {
  @Field(() => [CompetitionScheduleCreateManyInput], { nullable: false })
  @Type(() => CompetitionScheduleCreateManyInput)
  data!: Array<CompetitionScheduleCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
