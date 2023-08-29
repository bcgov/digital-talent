import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { GridAffiliation } from '@prisma/client';
import { GraphQLUUID } from 'graphql-scalars';
import { GridStepModel } from './grid-step.model';

registerEnumType(GridAffiliation, {
  name: 'GridAffiliation',
});

export interface IGridModel {
  id: string;
  name: string;
  affiliation: GridAffiliation;
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

  @Field((type) => GridAffiliation)
  affiliation: GridAffiliation;

  steps: GridStepModel[];

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
