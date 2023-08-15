import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLJSON, GraphQLUUID } from 'graphql-scalars';

@ObjectType()
export class ApplicationEntity {
  @Field((type) => GraphQLUUID)
  id: string;

  @Field((type) => GraphQLUUID)
  applicant_id?: string;

  @Field((type) => Date)
  created_at: Date;

  @Field((type) => Date, { nullable: true })
  updated_at?: Date;

  @Field((type) => Date, { nullable: true })
  deleted_at?: Date;

  // Assuming Json is a scalar or mapped type in GraphQL
  @Field((type) => GraphQLJSON)
  json: any;

  // You can include relationships like locations and skills here if needed
}
