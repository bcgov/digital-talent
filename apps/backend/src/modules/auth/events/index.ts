import { AccountSyncedEvent } from './account-synced/account-synced.event';
import { AccountSyncedHandler } from './account-synced/account-synced.handler';

export const Events = {
  AccountSyncedEvent,
};

export const EventHandlers = [AccountSyncedHandler];
