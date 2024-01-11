export enum SkillCategory {
  CLOUD_PLATFORMS = 'CLOUD_PLATFORMS',
  COMMUNICATION = 'COMMUNICATION',
  CONTAINER_PLATFORMS = 'CONTAINER_PLATFORMS',
  DATABASES = 'DATABASES',
  DEVELOPMENT_TOOLS = 'DEVELOPMENT_TOOLS',
  FRAMEWORKS_AND_LIBRARIES = 'FRAMEWORKS_AND_LIBRARIES',
  KNOWLEDGE = 'KNOWLEDGE',
  OPERATING_SYSTEMS = 'OPERATING_SYSTEMS',
  PRODUCTIVITY = 'PRODUCTIVITY',
  PROGRAMMING_LANGUAGES = 'PROGRAMMING_LANGUAGES',
}

export interface SkillGqlModel {
  id: string;
  category: SkillCategory;
  name: string;
  description?: string;
  created_at: Date;
  updated_at?: Date;
}

export interface GetSkillsGqlResponse {
  skills: SkillGqlModel[];
}

export interface GetSkillGqlResponse {
  skill: SkillGqlModel;
}
