import { CreateCompetitionHandler } from './create-competition/create-competition.handler';
import { DeleteCompetitionHandler } from './delete-competition/delete-competition.handler';
import { UpdateCompetitionHandler } from './update-competition/update-competition.handler';

export const CompetitionCommandHandlers = [
  CreateCompetitionHandler,
  UpdateCompetitionHandler,
  DeleteCompetitionHandler,
];
