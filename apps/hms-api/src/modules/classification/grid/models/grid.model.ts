import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { GridStepModel } from './grid-step.model';

export interface IGridModel {
  id: string;
  name: string;
  steps: GridStepModel[];
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

@ObjectType()
export class GridModel implements IGridModel {
  @Field((type) => GraphQLUUID)
  id: string;

  name: string;

  steps: GridStepModel[];

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
