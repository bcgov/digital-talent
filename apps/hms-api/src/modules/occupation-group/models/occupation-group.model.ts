import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';

export interface IOccupationGroupModel {
  id: string;
  code: string;
  name: string;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

@ObjectType()
export class OccupationGroupModel implements IOccupationGroupModel {
  @Field((type) => GraphQLUUID)
  id: string;

  code: string;

  name: string;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
