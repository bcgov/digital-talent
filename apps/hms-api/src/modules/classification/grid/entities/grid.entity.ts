import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { GridStepEntity } from './grid-step.entity';

@ObjectType()
export class GridEntity {
  @Field((type) => GraphQLUUID)
  id: string;

  name: string;

  steps: GridStepEntity[];

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
