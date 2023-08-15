import { CreatePositionHandler } from './create-position/create-position.handler';
import { DeletePositionHandler } from './delete-position/delete-position.handler';
import { UpdatePositionHandler } from './update-position/update-position.handler';

export const PositionCommandHandlers = [CreatePositionHandler, UpdatePositionHandler, DeletePositionHandler];
