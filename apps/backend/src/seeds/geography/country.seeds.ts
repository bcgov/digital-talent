import { SYSTEM_USER_ID } from '../../modules/auth/auth.constants';
import { SyncCountryCommand } from '../../modules/geography/commands/sync-country/sync-country.command';
import { SyncCountryInput } from '../../modules/geography/inputs/sync-country.input';

const syncSeeds: SyncCountryInput[] = [
  {
    id: '2e7c2aff-fc4f-4a8b-bdec-c2150469ed75',
    deltek_id: '37',
    name: 'Canada',
    code: 'CA',
  },
];

const syncCommands = syncSeeds.map((seed) => new SyncCountryCommand(seed, { created_by: SYSTEM_USER_ID }));

export default [...syncCommands];
