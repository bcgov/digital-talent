import { OccupationGroupCreatedEvent } from './occupation-group-created/occupation-group-created.event';
import { OccupationGroupCreatedHandler } from './occupation-group-created/occupation-group-created.handler';
import { OccupationGroupDeletedEvent } from './occupation-group-deleted/occupation-group-deleted.event';
import { OccupationGroupDeletedHandler } from './occupation-group-deleted/occupation-group-deleted.handler';
import { OccupationGroupUpdatedEvent } from './occupation-group-updated/occupation-group-updated.event';
import { OccupationGroupUpdatedHandler } from './occupation-group-updated/occupation-group-updated.handler';

export const OccupationGroupEvents = {
  OccupationGroupCreatedEvent,
  OccupationGroupUpdatedEvent,
  OccupationGroupDeletedEvent,
};

export const OccupationGroupEventHandlers = [
  OccupationGroupCreatedHandler,
  OccupationGroupUpdatedHandler,
  OccupationGroupDeletedHandler,
];
