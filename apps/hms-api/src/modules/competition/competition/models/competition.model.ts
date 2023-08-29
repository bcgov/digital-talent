import { Field, HideField, ObjectType, registerEnumType } from '@nestjs/graphql';
import { CompetitionCategory, CompetitionState } from '@prisma/client';
import { GraphQLUUID } from 'graphql-scalars';
import { ClassificationModel } from '../../../classification/classification/models/classification.model';
import { UserModel } from '../../../user/models/user.model';

registerEnumType(CompetitionCategory, {
  name: 'CompetitionCategory',
});

export interface ICompetitionModel {
  id: string;
  classification_id: string;
  deltek_id?: string;
  recruiter_id?: string;
  category: CompetitionCategory;
  classification: ClassificationModel;
  recruiter: UserModel;
  state: CompetitionState;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

@ObjectType()
export class CompetitionModel implements ICompetitionModel {
  @Field((type) => GraphQLUUID)
  id: string;

  @HideField()
  classification_id: string;

  deltek_id?: string;

  @HideField()
  recruiter_id?: string;

  @Field((type) => CompetitionCategory)
  category: CompetitionCategory;

  @Field((type) => ClassificationModel)
  classification: ClassificationModel;

  @Field((type) => UserModel)
  recruiter: UserModel;

  @Field((type) => CompetitionState)
  state: CompetitionState;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
