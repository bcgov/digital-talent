import { CreateClassificationHandler } from './create-classification/create-classification.handler';
import { DeleteClassificationHandler } from './delete-classification/delete-classification.handler';
import { UpdateClassificationHandler } from './update-classification/update-classification.handler';

export const ClassificationCommandHandlers = [
  CreateClassificationHandler,
  UpdateClassificationHandler,
  DeleteClassificationHandler,
];
