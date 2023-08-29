import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';

export interface IUserModel {
  id: string;
  deltek_id?: string;
  name?: string;
  email?: string;
  roles: string[];
  created_at?: Date;
  updated_at?: Date;
}

@ObjectType()
export class UserModel implements IUserModel {
  @Field((type) => GraphQLUUID)
  id: string;

  deltek_id?: string;

  name?: string;

  email?: string;

  roles: string[];

  created_at?: Date;

  updated_at?: Date;
}
