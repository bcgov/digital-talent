import { CreateApplicationLocationHandler } from './create-application-location/create-application-location.handler';
import { DeleteApplicationLocationHandler } from './delete-application-location/delete-application-location.handler';
import { UpdateApplicationLocationHandler } from './update-application-location/update-application-location.handler';

export const ApplicationLocationCommandHandlers = [
  CreateApplicationLocationHandler,
  UpdateApplicationLocationHandler,
  DeleteApplicationLocationHandler,
];
