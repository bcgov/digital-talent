export interface RecruiterGqlModel {
  id: string;
  name: string;
  email: string;
  created_at: Date;
  updated_at?: Date;
}

export interface GetRecruitersGqlResponse {
  recruiters: RecruiterGqlModel[];
}
