export interface HiringManagerGqlModel {
  id: string;
  name: string;
  email: string;
  created_at: Date;
  updated_at?: Date;
}

export interface GetHiringManagersGqlResponse {
  hiringManagers: HiringManagerGqlModel[];
}
