import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';

@ObjectType()
export class UserEntity {
  @Field((type) => GraphQLUUID)
  id: string;

  name?: string;

  email?: string;

  roles: string[];

  created_at?: Date;

  updated_at?: Date;
}
