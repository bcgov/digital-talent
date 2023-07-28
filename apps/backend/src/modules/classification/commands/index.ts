import { CreateGridHandler } from './create-grid/create-grid.handler';
import { CreatePositionHandler } from './create-position/create-position.handler';
import { DeletePositionHandler } from './delete-position/delete-position.handler';
import { UpdatePositionHandler } from './update-position/update-position.handler';

export const CommandHandlers = [CreateGridHandler, CreatePositionHandler, UpdatePositionHandler, DeletePositionHandler];
