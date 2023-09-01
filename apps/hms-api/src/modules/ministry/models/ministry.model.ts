import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';

export interface IMinistryModel {
  id: string;
  deltek_id: string;
  name: string;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

@ObjectType()
export class MinistryModel implements IMinistryModel {
  @Field((type) => GraphQLUUID)
  id: string;

  deltek_id: string;

  name: string;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
