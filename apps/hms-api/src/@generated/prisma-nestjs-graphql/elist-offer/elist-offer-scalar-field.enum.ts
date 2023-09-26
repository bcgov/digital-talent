import { registerEnumType } from '@nestjs/graphql';

export enum ElistOfferScalarFieldEnum {
  id = 'id',
  elist_id = 'elist_id',
  opportunity_id = 'opportunity_id',
  is_accepted = 'is_accepted',
  created_at = 'created_at',
  updated_at = 'updated_at',
  deleted_at = 'deleted_at',
}

registerEnumType(ElistOfferScalarFieldEnum, { name: 'ElistOfferScalarFieldEnum', description: undefined });
