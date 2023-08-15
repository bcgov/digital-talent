import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { LocationUpdatedEvent } from './location-updated.event';

@EventsHandler(LocationUpdatedEvent)
export class LocationUpdatedHandler implements IEventHandler<LocationUpdatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: LocationUpdatedEvent) {
    const {
      data: { id, ...rest },
      metadata,
    } = event;

    await this.prisma.location.update({
      where: { id },
      data: {
        ...rest,
        updated_at: metadata.created_at,
      },
    });
  }
}
