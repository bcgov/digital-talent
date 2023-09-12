import { Field, HideField, ObjectType, registerEnumType } from '@nestjs/graphql';
import { CompetitionCategory, CompetitionState } from '@prisma/client';
import { GraphQLUUID } from 'graphql-scalars';
import { CompetitionScheduleModel } from '../../../competition-schedule/models/competition-schedule.model';
import { JobDescriptionModel } from '../../../job-description/models/job-description.model';
import { UserModel } from '../../../user/models/user.model';

registerEnumType(CompetitionCategory, {
  name: 'CompetitionCategory',
});

export interface ICompetitionModel {
  id: string;
  job_description_id: string;
  deltek_id?: string;
  recruiter_id?: string;
  category: CompetitionCategory;
  job_description: JobDescriptionModel;
  recruiter: UserModel;
  schedule?: CompetitionScheduleModel[];
  state: CompetitionState;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

@ObjectType()
export class CompetitionModel implements ICompetitionModel {
  @Field((type) => GraphQLUUID)
  id: string;

  deltek_id?: string;

  @HideField()
  job_description_id: string;

  @HideField()
  recruiter_id?: string;

  @Field((type) => CompetitionCategory)
  category: CompetitionCategory;

  @Field((type) => JobDescriptionModel)
  job_description: JobDescriptionModel;

  @Field((type) => UserModel)
  recruiter: UserModel;

  @Field((type) => [CompetitionScheduleModel])
  schedule?: CompetitionScheduleModel[];

  @Field((type) => CompetitionState)
  state: CompetitionState;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
