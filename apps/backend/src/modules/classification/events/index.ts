import { GridCreatedEvent } from './grid-created/grid-created.event';
import { GridCreatedHandler } from './grid-created/grid-created.handler';
import { PositionCreatedEvent } from './position-created/position-created.event';
import { PositionCreatedHandler } from './position-created/position-created.handler';
import { PositionDeletedEvent } from './position-deleted/position-deleted.event';
import { PositionDeletedHandler } from './position-deleted/position-deleted.handler';
import { PositionUpdatedEvent } from './position-updated/position-updated.event';
import { PositionUpdatedHandler } from './position-updated/position-updated.handler';

export const Events = {
  GridCreatedEvent,
  PositionCreatedEvent,
  PositionUpdatedEvent,
  PositionDeletedEvent,
};

export const EventHandlers = [
  GridCreatedHandler,
  PositionCreatedHandler,
  PositionUpdatedHandler,
  PositionDeletedHandler,
];
