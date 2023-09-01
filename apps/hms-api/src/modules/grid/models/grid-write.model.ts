import { GridStepModel } from './grid-step.model';
import { IGridModel } from './grid.model';

export class GridWriteModel implements IGridModel {
  id: string;

  name: string;

  steps: GridStepModel[];

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
