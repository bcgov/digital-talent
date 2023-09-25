import { Field, HideField, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { CompetitionState } from '../../../@generated/prisma-nestjs-graphql';
import { CompetitionModel } from '../../competition/competition/models/competition.model';

export interface ICompetitionScheduleModel {
  id: string;
  competition_id: string;
  state: CompetitionState;
  start_at: Date;
  end_at: Date;
  competition: CompetitionModel;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

@ObjectType()
export class CompetitionScheduleModel implements ICompetitionScheduleModel {
  @Field((type) => GraphQLUUID)
  id: string;

  @HideField()
  competition_id: string;

  @Field((type) => CompetitionState)
  state: CompetitionState;

  start_at: Date;

  end_at: Date;

  @Field((type) => CompetitionModel)
  competition: CompetitionModel;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
