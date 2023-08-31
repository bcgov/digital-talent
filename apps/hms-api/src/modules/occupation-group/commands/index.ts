import { CreateOccupationGroupHandler } from './create-occupation-group/create-occupation-group.handler';
import { DeleteOccupationGroupHandler } from './delete-occupation-group/delete-occupation-group.handler';
import { UpdateOccupationGroupHandler } from './update-occupation-group/update-occupation-group.handler';

export const OccupationGroupCommandHandlers = [
  CreateOccupationGroupHandler,
  UpdateOccupationGroupHandler,
  DeleteOccupationGroupHandler,
];
