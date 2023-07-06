import { SYSTEM_USER_ID } from '../../modules/auth/auth.constants';
import { SyncProvinceCommand } from '../../modules/geography/commands/sync-province/sync-province.command';
import { SyncProvinceInput } from '../../modules/geography/inputs/sync-province.input';

const syncSeeds: SyncProvinceInput[] = [
  {
    id: '168f82b3-24e8-4c40-97a2-8f4699fcb271',
    country_id: '2e7c2aff-fc4f-4a8b-bdec-c2150469ed75',
    deltek_id: '569',
    name: 'Alberta',
    code: 'AB',
  },
  {
    id: '77ce1c9f-4e55-4dce-9d6d-bbff4228d3f3',
    country_id: '2e7c2aff-fc4f-4a8b-bdec-c2150469ed75',
    deltek_id: '570',
    name: 'British Columbia',
    code: 'BC',
  },
  {
    id: '803a7c41-5c86-40f9-a5fa-75c444fb6e48',
    country_id: '2e7c2aff-fc4f-4a8b-bdec-c2150469ed75',
    deltek_id: '571',
    name: 'Manitoba',
    code: 'MB',
  },
  {
    id: '36781750-0669-4e06-a710-4ccfcd742f2c',
    country_id: '2e7c2aff-fc4f-4a8b-bdec-c2150469ed75',
    deltek_id: '572',
    name: 'New Brunswick',
    code: 'NB',
  },
  {
    id: 'ec650fe2-cf8b-411b-ae0e-55c152f51cdd',
    country_id: '2e7c2aff-fc4f-4a8b-bdec-c2150469ed75',
    deltek_id: '573',
    name: 'Newfoundland and Labrador',
    code: 'NL',
  },
  {
    id: '68278e1c-cd59-4874-8542-457003aa6f57',
    country_id: '2e7c2aff-fc4f-4a8b-bdec-c2150469ed75',
    deltek_id: '574',
    name: 'Nova Scotia',
    code: 'NS',
  },
  {
    id: '29dc1676-ac8a-4deb-a4af-0262f85853fd',
    country_id: '2e7c2aff-fc4f-4a8b-bdec-c2150469ed75',
    deltek_id: '575',
    name: 'Northwest Territories',
    code: 'NT',
  },
  {
    id: '0b18345e-d5d9-41b8-9a64-911a767706c9',
    country_id: '2e7c2aff-fc4f-4a8b-bdec-c2150469ed75',
    deltek_id: '576',
    name: 'Nunavut',
    code: 'NU',
  },
  {
    id: '1d7a5b99-e081-4cb5-88f1-5d39ba86fbcd',
    country_id: '2e7c2aff-fc4f-4a8b-bdec-c2150469ed75',
    deltek_id: '577',
    name: 'Ontario',
    code: 'ON',
  },
  {
    id: 'e6932e70-bc22-478d-9a47-066cdc583414',
    country_id: '2e7c2aff-fc4f-4a8b-bdec-c2150469ed75',
    deltek_id: '578',
    name: 'Prince Edward Island',
    code: 'PE',
  },
  {
    id: 'a8e45279-6642-465f-b7be-bc540d51bb25',
    country_id: '2e7c2aff-fc4f-4a8b-bdec-c2150469ed75',
    deltek_id: '579',
    name: 'Quebec',
    code: 'QC',
  },
  {
    id: 'adbcbd8e-2f1e-4b57-8abd-bb30dc2fc98e',
    country_id: '2e7c2aff-fc4f-4a8b-bdec-c2150469ed75',
    deltek_id: '580',
    name: 'Saskatchewan',
    code: 'SK',
  },
  {
    id: '1c5140f7-b8c6-4c63-a8c2-91d7166cace4',
    country_id: '2e7c2aff-fc4f-4a8b-bdec-c2150469ed75',
    deltek_id: '581',
    name: 'Yukon',
    code: 'YT',
  },
];

const syncCommands = syncSeeds.map((seed) => new SyncProvinceCommand(seed, { created_by: SYSTEM_USER_ID }));

export default [...syncCommands];
