import { IdentityCreatedEvent } from './identity-created/identity-created.event';
import { IdentityCreatedHandler } from './identity-created/identity-created.handler';
import { IdentityDeletedEvent } from './identity-deleted/identity-deleted.event';
import { IdentityDeletedHandler } from './identity-deleted/identity-deleted.handler';

export const IdentityEvents = {
  IdentityCreatedEvent,
  IdentityDeletedEvent,
};

export const IdentityEventHandlers = [IdentityCreatedHandler, IdentityDeletedHandler];
