import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';

export interface IRecruiter {
  id: string;
  name?: string;
  email?: string;
  created_at?: Date;
  updated_at?: Date;
}

@ObjectType()
export class RecruiterModel implements IRecruiter {
  @Field((type) => GraphQLUUID)
  id: string;

  name?: string;

  email?: string;

  created_at?: Date;

  updated_at?: Date;
}
