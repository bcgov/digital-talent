import { GridCreatedEvent } from './grid-created/grid-created.event';
import { GridCreatedHandler } from './grid-created/grid-created.handler';

export const Events = {
  GridCreatedEvent,
};

export const EventHandlers = [GridCreatedHandler];
