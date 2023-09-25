import { registerEnumType } from '@nestjs/graphql';

export enum ElistOfferScalarFieldEnum {
  id = 'id',
  elistId = 'elistId',
  is_accepted = 'is_accepted',
  created_at = 'created_at',
  updated_at = 'updated_at',
  deleted_at = 'deleted_at',
  opportunityId = 'opportunityId',
}

registerEnumType(ElistOfferScalarFieldEnum, { name: 'ElistOfferScalarFieldEnum', description: undefined });
