import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { GridEntity } from '../../grid/entities/grid.entity';
import { PositionEntity } from '../../position/entities/position.entity';

@ObjectType()
export class ClassificationEntity {
  @Field((type) => GraphQLUUID)
  id: string;

  @Field((type) => GraphQLUUID)
  grid_id: string;

  @Field((type) => GraphQLUUID)
  position_id: string;

  rate_adjustment: number;

  grid?: GridEntity;

  position?: PositionEntity;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
