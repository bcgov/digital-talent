import { GridCreatedEvent } from './grid-created/grid-created.event';
import { GridCreatedHandler } from './grid-created/grid-created.handler';
import { GridDeletedEvent } from './grid-deleted/grid-deleted.event';
import { GridDeletedHandler } from './grid-deleted/grid-deleted.handler';
import { GridUpdatedEvent } from './grid-updated/grid-updated.event';
import { GridUpdatedHandler } from './grid-updated/grid-updated.handler';

export const GridEvents = {
  GridCreatedEvent,
  GridDeletedEvent,
  GridUpdatedEvent,
};

export const GridEventHandlers = [GridCreatedHandler, GridUpdatedHandler, GridDeletedHandler];
