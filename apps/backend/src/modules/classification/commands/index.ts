import { CreateGridHandler } from './create-grid/create-grid.handler';
import { CreatePositionHandler } from './create-position/create-position.handler';
import { DeleteGridHandler } from './delete-grid/delete-grid.handler';
import { DeletePositionHandler } from './delete-position/delete-position.handler';
import { UpdateGridHandler } from './update-grid/update-grid.handler';
import { UpdatePositionHandler } from './update-position/update-position.handler';

export const CommandHandlers = [
  CreateGridHandler,
  UpdateGridHandler,
  DeleteGridHandler,
  CreatePositionHandler,
  UpdatePositionHandler,
  DeletePositionHandler,
];
