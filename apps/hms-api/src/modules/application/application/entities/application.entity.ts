import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import GraphQLJSON from 'graphql-type-json';

@ObjectType()
export class ApplicationEntity {
  @Field((type) => GraphQLUUID)
  id: string;

  @Field((type) => GraphQLUUID)
  applicant_id?: string;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;

  // Assuming Json is a scalar or mapped type in GraphQL
  @Field((type) => GraphQLJSON)
  json: any;

  // You can include relationships like locations and skills here if needed
}
