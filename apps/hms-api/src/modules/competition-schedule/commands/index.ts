import { CreateCompetitionScheduleHandler } from './create-competition-schedule/create-competition-schedule.handler';
import { DeleteCompetitionScheduleHandler } from './delete-competition-schedule/delete-competition-schedule.handler';
import { UpdateCompetitionScheduleHandler } from './update-competition-schedule/update-competition-schedule.handler';

export const CommandHandlers = [
  CreateCompetitionScheduleHandler,
  UpdateCompetitionScheduleHandler,
  DeleteCompetitionScheduleHandler,
];
