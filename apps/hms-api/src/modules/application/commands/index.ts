import { CreateApplicationHandler } from './create-application/create-application.handler';
import { DeleteApplicationHandler } from './delete-application/delete-application.handler';
import { UpdateApplicationHandler } from './update-application/update-application.handler';

export const CommandHandlers = [CreateApplicationHandler, UpdateApplicationHandler, DeleteApplicationHandler];
