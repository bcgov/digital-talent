import { Field, ObjectType } from '@nestjs/graphql';
import { PositionCategory } from '@prisma/client';
import { GraphQLUUID } from 'graphql-scalars';

@ObjectType()
export class PositionEntity {
  @Field((type) => GraphQLUUID)
  id: string;

  @Field((type) => PositionCategory)
  category: PositionCategory;

  name: string;

  description?: string;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
