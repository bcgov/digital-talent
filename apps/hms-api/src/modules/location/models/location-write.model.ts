import { LocationRegion } from '@prisma/client';

export class LocationWriteModel {
  id: string;

  deltek_id: string;

  name: string;

  postal_code: string;

  lat: number;

  lon: number;

  region: LocationRegion;

  created_at: Date;

  updated_at?: Date;

  deleted_at?: Date;
}
