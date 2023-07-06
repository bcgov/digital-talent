import { SYSTEM_USER_ID } from '../../modules/auth/auth.constants';
import { SyncRegionCommand } from '../../modules/geography/commands/sync-region/sync-region.command';
import { SyncRegionInput } from '../../modules/geography/inputs/sync-region.input';
//
const syncSeeds: SyncRegionInput[] = [
  { id: '5e499f5b-c9af-4bcd-b8e4-f63299f20159', province_id: '77ce1c9f-4e55-4dce-9d6d-bbff4228d3f3', name: 'Cariboo' },
  { id: 'b3a0b8a8-4d0c-431a-b28e-596fd295afaa', province_id: '77ce1c9f-4e55-4dce-9d6d-bbff4228d3f3', name: 'Kootenay' },
  {
    id: '468efa79-bb23-493c-84b3-15947c3bf667',
    province_id: '77ce1c9f-4e55-4dce-9d6d-bbff4228d3f3',
    name: 'Mainland / Southwest',
  },
  {
    id: 'f20d7d75-d955-4016-8e07-773930b2a669',
    province_id: '77ce1c9f-4e55-4dce-9d6d-bbff4228d3f3',
    name: 'North Coast and Nechako',
  },
  {
    id: '9607607a-6dab-4dc4-ac7e-99f83887a8ae',
    province_id: '77ce1c9f-4e55-4dce-9d6d-bbff4228d3f3',
    name: 'Northeast',
  },
  {
    id: 'f2e63b7e-e31a-45c3-ac4d-74d37b9df845',
    province_id: '77ce1c9f-4e55-4dce-9d6d-bbff4228d3f3',
    name: 'Thompson-Okanagan',
  },
  {
    id: '439f07d0-33d8-4993-8950-4ee0f3f3a7ef',
    province_id: '77ce1c9f-4e55-4dce-9d6d-bbff4228d3f3',
    name: 'Vancouver Island / Coast',
  },
  {
    id: '543f5209-29b0-4e2e-ab98-37557a7c5c8b',
    province_id: '1d7a5b99-e081-4cb5-88f1-5d39ba86fbcd',
    name: 'Central East',
  },
  {
    id: '1254e673-9b4f-44ea-ac08-2c55bd6045dc',
    province_id: '1d7a5b99-e081-4cb5-88f1-5d39ba86fbcd',
    name: 'Central West',
  },
  { id: '4ce906b3-6a0c-4d5e-84d0-49ef0fa03e0b', province_id: '1d7a5b99-e081-4cb5-88f1-5d39ba86fbcd', name: 'Eastern' },
  { id: '83263f71-8a67-494d-8da4-1b5453039d03', province_id: '1d7a5b99-e081-4cb5-88f1-5d39ba86fbcd', name: 'Northern' },
  {
    id: '81d9b562-eb3f-4cd5-a6a2-87b22652bb37',
    province_id: '1d7a5b99-e081-4cb5-88f1-5d39ba86fbcd',
    name: 'South Western',
  },
  { id: 'f836bd52-cfbb-430e-8b8c-05a271ad1114', province_id: '1d7a5b99-e081-4cb5-88f1-5d39ba86fbcd', name: 'Western' },
];

const syncCommands = syncSeeds.map((seed) => new SyncRegionCommand(seed, { created_by: SYSTEM_USER_ID }));

export default [...syncCommands];
