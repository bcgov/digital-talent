import { registerEnumType } from '@nestjs/graphql';

export enum CompetitionCategory {
  CMH = 'CMH',
  RH = 'RH',
}

registerEnumType(CompetitionCategory, { name: 'CompetitionCategory', description: undefined });
