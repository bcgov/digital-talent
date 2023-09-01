import { Field, HideField, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { ClassificationModel } from '../../classification/models/classification.model';

export interface IJobDescription {
  id: string;
  classification_id: string;
  e_class_id?: string;
  name: string;
  classification: ClassificationModel;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

@ObjectType()
export class JobDescriptionModel implements IJobDescription {
  @Field((type) => GraphQLUUID)
  id: string;

  @HideField()
  classification_id: string;

  e_class_id?: string;

  name: string;

  @Field((type) => ClassificationModel)
  classification: ClassificationModel;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
