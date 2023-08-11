import { SYSTEM_USER_ID } from '../../modules/auth/auth.constants';
import { SyncUserCommand } from '../../modules/user/commands/sync-user/sync-user.command';
import { SyncUserInput } from '../../modules/user/inputs/sync-user.input';

const syncSeeds: SyncUserInput[] = [
  {
    id: SYSTEM_USER_ID,
    name: 'System User',
    roles: ['admin'],
  },
];

const syncCommands = syncSeeds.map((seed) => new SyncUserCommand(seed, { created_by: SYSTEM_USER_ID }));

export default [...syncCommands];
