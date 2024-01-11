import { registerEnumType } from '@nestjs/graphql';

export enum CompetitionScheduleScalarFieldEnum {
  id = 'id',
  competition_id = 'competition_id',
  state = 'state',
  start_at = 'start_at',
  end_at = 'end_at',
  created_at = 'created_at',
  updated_at = 'updated_at',
  deleted_at = 'deleted_at',
}

registerEnumType(CompetitionScheduleScalarFieldEnum, {
  name: 'CompetitionScheduleScalarFieldEnum',
  description: undefined,
});
