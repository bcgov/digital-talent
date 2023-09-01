import { CreateGridHandler } from './create-grid/create-grid.handler';
import { DeleteGridHandler } from './delete-grid/delete-grid.handler';
import { UpdateGridHandler } from './update-grid/update-grid.handler';

export const GridCommandHandlers = [CreateGridHandler, UpdateGridHandler, DeleteGridHandler];
