import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionScheduleUpdateManyMutationInput } from './competition-schedule-update-many-mutation.input';
import { CompetitionScheduleWhereInput } from './competition-schedule-where.input';

@ArgsType()
export class UpdateManyCompetitionScheduleArgs {
  @Field(() => CompetitionScheduleUpdateManyMutationInput, { nullable: false })
  @Type(() => CompetitionScheduleUpdateManyMutationInput)
  data!: CompetitionScheduleUpdateManyMutationInput;

  @Field(() => CompetitionScheduleWhereInput, { nullable: true })
  @Type(() => CompetitionScheduleWhereInput)
  where?: CompetitionScheduleWhereInput;
}
