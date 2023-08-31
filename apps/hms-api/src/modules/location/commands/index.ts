import { CreateLocationHandler } from './create-location/create-location.handler';
import { DeleteLocationHandler } from './delete-location/delete-location.handler';
import { UpdateLocationHandler } from './update-location/update-location.handler';

export const LocationCommandHandlers = [CreateLocationHandler, UpdateLocationHandler, DeleteLocationHandler];
