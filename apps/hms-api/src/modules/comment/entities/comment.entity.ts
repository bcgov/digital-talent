import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';

@ObjectType()
export class CommentEntity {
  @Field((type) => GraphQLUUID)
  id: string;

  record_id: string;

  record_type: string;

  @Field((type) => GraphQLUUID)
  user_id: string;

  text: string;

  @Field((type) => Date)
  created_at: Date;

  @Field((type) => Date, { nullable: true })
  updated_at?: Date;

  @Field((type) => Date, { nullable: true })
  deleted_at?: Date;
}
