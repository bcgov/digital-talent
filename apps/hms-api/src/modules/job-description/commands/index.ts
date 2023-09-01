import { CreateJobDescriptionHandler } from './create-job-description/create-job-description.handler';
import { DeleteJobDescriptionHandler } from './delete-job-description/delete-job-description.handler';
import { UpdateJobDescriptionHandler } from './update-job-description/update-job-description.handler';

export const JobDescriptionCommandHandlers = [
  CreateJobDescriptionHandler,
  UpdateJobDescriptionHandler,
  DeleteJobDescriptionHandler,
];
