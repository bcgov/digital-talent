import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';

@ObjectType()
export class CompetitionScheduleEntity {
  // id             String           @id @db.Uuid
  // competition_id String           @unique @db.Uuid
  // state          CompetitionState
  // start_at       DateTime
  // end_at         DateTime
  // created_at DateTime
  // updated_at DateTime?

  @Field((type) => GraphQLUUID)
  id: string;

  @Field((type) => GraphQLUUID)
  competition_id: string;

  state: string; // state          CompetitionState

  start_at: Date;

  end_at: Date;

  created_at?: Date;

  updated_at?: Date;
}
