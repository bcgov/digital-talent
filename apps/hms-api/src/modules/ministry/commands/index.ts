import { CreateMinistryHandler } from './create-ministry/create-ministry.handler';
import { DeleteMinistryHandler } from './delete-ministry/delete-ministry.handler';
import { UpdateMinistryHandler } from './update-ministry/update-ministry.handler';

export const MinistryCommandHandlers = [CreateMinistryHandler, UpdateMinistryHandler, DeleteMinistryHandler];
