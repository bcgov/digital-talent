import { Field, HideField, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { GridModel } from '../../grid/models/grid.model';
import { OccupationGroupModel } from '../../occupation-group/models/occupation-group.model';

export interface IClassificationModel {
  id: string;
  grid_id: string;
  occupation_group_id: string;
  rate_adjustment: number;
  grid: GridModel;
  occupation_group: OccupationGroupModel;
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
  occupation_group_id: string;

  rate_adjustment: number;

  @Field((type) => GridModel)
  grid: GridModel;

  @Field((type) => OccupationGroupModel)
  occupation_group: OccupationGroupModel;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
