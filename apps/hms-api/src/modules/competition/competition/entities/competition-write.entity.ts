import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { CompetitionCategory, CompetitionState } from '@prisma/client';
import { GraphQLUUID } from 'graphql-scalars';

registerEnumType(CompetitionCategory, {
  name: 'CompetitionCategory',
  description: 'The competition categories',
});

@ObjectType()
export class CompetitionWriteEntity {
  @Field((type) => GraphQLUUID)
  id: string;

  @Field((type) => GraphQLUUID)
  classification_id: string;

  deltek_id?: string;

  @Field((type) => GraphQLUUID)
  recruiter_id?: string;

  @Field((type) => CompetitionCategory)
  category: CompetitionCategory;

  @Field((type) => CompetitionState)
  state: CompetitionState;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
