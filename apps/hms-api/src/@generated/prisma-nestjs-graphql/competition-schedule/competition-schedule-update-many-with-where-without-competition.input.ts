import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionScheduleScalarWhereInput } from './competition-schedule-scalar-where.input';
import { CompetitionScheduleUpdateManyMutationInput } from './competition-schedule-update-many-mutation.input';

@InputType()
export class CompetitionScheduleUpdateManyWithWhereWithoutCompetitionInput {
  @Field(() => CompetitionScheduleScalarWhereInput, { nullable: false })
  @Type(() => CompetitionScheduleScalarWhereInput)
  where!: CompetitionScheduleScalarWhereInput;

  @Field(() => CompetitionScheduleUpdateManyMutationInput, { nullable: false })
  @Type(() => CompetitionScheduleUpdateManyMutationInput)
  data!: CompetitionScheduleUpdateManyMutationInput;
}
