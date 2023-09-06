import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';

export interface IHiringManager {
  id: string;
  name?: string;
  email?: string;
  created_at?: Date;
  updated_at?: Date;
}

@ObjectType()
export class HiringManagerModel implements IHiringManager {
  @Field((type) => GraphQLUUID)
  id: string;

  name?: string;

  email?: string;

  created_at?: Date;

  updated_at?: Date;
}
