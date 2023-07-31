import { GridCreatedEvent } from './grid-created/grid-created.event';
import { GridCreatedHandler } from './grid-created/grid-created.handler';
import { GridDeletedEvent } from './grid-deleted/grid-deleted.event';
import { GridDeletedHandler } from './grid-deleted/grid-deleted.handler';
import { GridUpdatedEvent } from './grid-updated/grid-updated.event';
import { GridUpdatedHandler } from './grid-updated/grid-updated.handler';
import { PositionCreatedEvent } from './position-created/position-created.event';
import { PositionCreatedHandler } from './position-created/position-created.handler';
import { PositionDeletedEvent } from './position-deleted/position-deleted.event';
import { PositionDeletedHandler } from './position-deleted/position-deleted.handler';
import { PositionUpdatedEvent } from './position-updated/position-updated.event';
import { PositionUpdatedHandler } from './position-updated/position-updated.handler';

export const Events = {
  GridCreatedEvent,
  GridUpdatedEvent,
  GridDeletedEvent,
  PositionCreatedEvent,
  PositionUpdatedEvent,
  PositionDeletedEvent,
};

export const EventHandlers = [
  GridCreatedHandler,
  GridUpdatedHandler,
  GridDeletedHandler,
  PositionCreatedHandler,
  PositionUpdatedHandler,
  PositionDeletedHandler,
];
