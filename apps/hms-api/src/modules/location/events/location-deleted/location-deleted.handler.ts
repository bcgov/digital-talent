import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { LocationDeletedEvent } from './location-deleted.event';

@EventsHandler(LocationDeletedEvent)
export class LocationDeletedHandler implements IEventHandler<LocationDeletedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: LocationDeletedEvent) {
    const {
      data: { id },
      metadata,
    } = event;

    await this.prisma.location.update({
      where: { id },
      data: {
        deleted_at: metadata.created_at,
      },
    });
  }
}
