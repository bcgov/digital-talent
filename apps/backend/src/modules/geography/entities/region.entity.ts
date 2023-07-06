import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';

@ObjectType()
export class RegionEntity {
  @Field((type) => GraphQLUUID)
  id: string;

  province_id?: string;

  name?: string;

  created_at?: Date;

  updated_at?: Date;
}
