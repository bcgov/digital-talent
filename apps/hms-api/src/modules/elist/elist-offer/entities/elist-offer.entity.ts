import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';

@ObjectType()
export class ElistOfferEntity {
  @Field((type) => GraphQLUUID)
  id: string;

  @Field((type) => GraphQLUUID)
  elistId: string;

  is_accepted: boolean;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
