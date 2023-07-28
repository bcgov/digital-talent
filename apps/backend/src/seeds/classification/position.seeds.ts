import { PositionCategory } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { SeedType } from '../seeds.type';

export class PositionSeed {
  @IsUUID()
  id: string;

  @IsEnum(PositionCategory)
  category: PositionCategory;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description?: string;
}

export const seeds: SeedType<PositionSeed> = {
  upsert: [
    { id: 'fa931d17-41cb-4967-b9aa-ada43391674c', name: 'Dev Ops Specialist', category: 'IS' },
    {
      id: '8b98f19d-85df-40f2-819b-bdf8eae68813',
      name: 'Full Stack Developer',
      description: 'Orangina',
      category: 'IS',
    },
    { id: '8212a5b1-5efb-4e45-a48c-070043f83121', name: 'Product Manager', category: 'BAND' },
    { id: '69982e41-3557-4c86-bfed-ff2f09574823', name: 'Product Manager', category: 'IS' },
    { id: '92588e9b-4722-4579-af4a-c98311ae182b', name: 'Scrum Master', category: 'IS' },
    { id: 'd1de1a6b-5277-4ae1-978c-0ad28ebf72da', name: 'Site Reliability Specialist', category: 'IS' },
    { id: '458e6de8-b90a-4983-977f-580001c2d96a', name: 'User Experience Designer', category: 'IS' },
    { id: '5078204f-03c7-4d9d-a144-8c646aeda40b', name: 'User Experience Researcher', category: 'AO' },
  ],
  remove: [],
};

//
