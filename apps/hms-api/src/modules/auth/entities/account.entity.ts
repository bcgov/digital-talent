import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';

@ObjectType()
export class AccountEntity {
  @Field((type) => GraphQLUUID)
  id: string;

  name?: string;

  email?: string;

  roles: string[];

  sub: string;

  identity_provider: string;

  created_at: Date;

  updated_at?: Date;
}
