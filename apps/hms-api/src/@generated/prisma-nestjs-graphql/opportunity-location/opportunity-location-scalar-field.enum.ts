import { registerEnumType } from '@nestjs/graphql';

export enum OpportunityLocationScalarFieldEnum {
  location_id = 'location_id',
  opportunity_id = 'opportunity_id',
  created_at = 'created_at',
  deleted_at = 'deleted_at',
}

registerEnumType(OpportunityLocationScalarFieldEnum, {
  name: 'OpportunityLocationScalarFieldEnum',
  description: undefined,
});
