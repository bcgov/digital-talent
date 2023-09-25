import { registerEnumType } from '@nestjs/graphql';

export enum CompetitionState {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  INTAKE_PERIOD = 'INTAKE_PERIOD',
  APPLICATION_PERIOD = 'APPLICATION_PERIOD',
  SCREENING_PERIOD = 'SCREENING_PERIOD',
  ASSESSMENT_PERIOD = 'ASSESSMENT_PERIOD',
  INTERVIEW_PERIOD = 'INTERVIEW_PERIOD',
  OFFER_PERIOD = 'OFFER_PERIOD',
  CLOSED = 'CLOSED',
  CANCELLED = 'CANCELLED',
}

registerEnumType(CompetitionState, { name: 'CompetitionState', description: undefined });
