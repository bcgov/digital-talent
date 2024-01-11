import { registerEnumType } from '@nestjs/graphql';

export enum OpportunityState {
  SUBMITTED = 'SUBMITTED',
  REJECTED = 'REJECTED',
  APPROVED = 'APPROVED',
}

registerEnumType(OpportunityState, { name: 'OpportunityState', description: undefined });
