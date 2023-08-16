import { CreateElistHandler } from './create-elist/create-elist.handler';
import { DeleteElistHandler } from './delete-elist/delete-elist.handler';
import { UpdateElistHandler } from './update-elist/update-elist.handler';

export const ElistCommandHandlers = [CreateElistHandler, UpdateElistHandler, DeleteElistHandler];
