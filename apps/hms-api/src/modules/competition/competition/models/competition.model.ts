import { Field, HideField, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { CompetitionCategory, CompetitionState } from '../../../../@generated/prisma-nestjs-graphql';
import { CompetitionScheduleModel } from '../../../competition-schedule/models/competition-schedule.model';
import { JobDescriptionModel } from '../../../job-description/models/job-description.model';
import { UserModel } from '../../../user/models/user.model';
import { CompetitionSkillModel } from '../../competition-skill/models/competition-skill.model';

// registerEnumType(CompetitionCategory, {
//   name: 'CompetitionCategory',
// });

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
  skills: CompetitionSkillModel[];
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

  @Field((type) => [CompetitionSkillModel])
  skills: CompetitionSkillModel[];

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
