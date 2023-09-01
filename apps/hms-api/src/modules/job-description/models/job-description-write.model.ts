import { JobDescriptionModel } from './job-description.model';

export class JobDescriptionWriteModel implements Omit<JobDescriptionModel, 'classification'> {
  id: string;

  classification_id: string;

  e_class_id?: string;

  name: string;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
