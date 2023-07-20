import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { GridCreatedEvent } from './grid-created.event';

@EventsHandler(GridCreatedEvent)
export class GridCreatedHandler implements IEventHandler<GridCreatedEvent> {
  handle(event: GridCreatedEvent) {
    // eslint-disable-next-line no-console
    console.log('Event: ', event);
  }
}
