import { PositionCategory } from '@prisma/client';
import { IPositionModel } from './position.model';

export class PositionWriteModel implements IPositionModel {
  id: string;

  category: PositionCategory;

  name: string;

  description?: string;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
