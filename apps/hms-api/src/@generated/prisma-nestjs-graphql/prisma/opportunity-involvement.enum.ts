import { registerEnumType } from '@nestjs/graphql';

export enum OpportunityInvolvement {
  NONE = 'NONE',
  FULL = 'FULL',
}

registerEnumType(OpportunityInvolvement, { name: 'OpportunityInvolvement', description: undefined });
