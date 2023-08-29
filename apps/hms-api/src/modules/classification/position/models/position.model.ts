import { Field, ObjectType } from '@nestjs/graphql';
import { PositionCategory } from '@prisma/client';
import { GraphQLUUID } from 'graphql-scalars';

export interface IPositionModel {
  id: string;
  category: PositionCategory;
  name: string;
  description?: string;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

@ObjectType()
export class PositionModel implements IPositionModel {
  @Field((type) => GraphQLUUID)
  id: string;

  @Field((type) => PositionCategory)
  category: PositionCategory;

  name: string;

  description?: string;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
