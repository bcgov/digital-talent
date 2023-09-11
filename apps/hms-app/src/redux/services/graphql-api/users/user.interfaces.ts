export interface UserGqlModel {
  id: string;
  deltek_id?: string;
  name: string;
  email: string;
  roles: string[];
  created_at: Date;
  updated_at?: Date;
}

export interface GetUsersGqlResponse {
  users: UserGqlModel[];
}

export interface GetUserGqlResponse {
  user: UserGqlModel;
}
