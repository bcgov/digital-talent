import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';

@ObjectType()
export class IdentityWriteEntity {
  @Field((type) => GraphQLUUID)
  user_id: string;

  sub: string;

  identity_provider: string;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
