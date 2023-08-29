import { Field, HideField, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { GridModel } from '../../grid/models/grid.model';
import { PositionModel } from '../../position/models/position.model';

export interface IClassificationModel {
  id: string;
  grid_id: string;
  position_id: string;
  rate_adjustment: number;
  grid: GridModel;
  position: PositionModel;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

@ObjectType()
export class ClassificationModel implements IClassificationModel {
  @Field((type) => GraphQLUUID)
  id: string;

  @HideField()
  grid_id: string;

  @HideField()
  position_id: string;

  rate_adjustment: number;

  @Field((type) => GridModel)
  grid: GridModel;

  @Field((type) => PositionModel)
  position: PositionModel;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
