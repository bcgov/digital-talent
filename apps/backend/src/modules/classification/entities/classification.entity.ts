import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { GraphQLRange } from '../../graphql/scalars/graphql-range.scalar';

@ObjectType()
export class ClassificationEntity {
  @Field((type) => GraphQLUUID)
  id: string;

  name?: string;

  description?: string;

  code?: string;

  grid?: string;

  @Field((type) => GraphQLRange)
  salary_range: [number, number];

  salary_adjustment?: number;

  created_at?: Date;

  updated_at?: Date;
}
