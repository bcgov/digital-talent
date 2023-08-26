import { UserSyncedEvent } from './user-synced/user-synced.event';
import { UserSyncedHandler } from './user-synced/user-synced.handler';

export const Events = {
  UserSyncedEvent,
};
export const EventHandlers = [UserSyncedHandler];
