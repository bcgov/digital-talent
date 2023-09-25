import { registerEnumType } from '@nestjs/graphql';

export enum LocationRegion {
  CARIBOO = 'CARIBOO',
  KOOTENAY = 'KOOTENAY',
  MAINLAND_SOUTHWEST = 'MAINLAND_SOUTHWEST',
  NORTH_COAST = 'NORTH_COAST',
  NORTHEAST = 'NORTHEAST',
  THOMPSON_OKANAGAN = 'THOMPSON_OKANAGAN',
  VANCOUVER_ISLAND_COAST = 'VANCOUVER_ISLAND_COAST',
}

registerEnumType(LocationRegion, { name: 'LocationRegion', description: undefined });
