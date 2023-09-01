import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { LocationCreatedEvent } from './location-created.event';

@EventsHandler(LocationCreatedEvent)
export class LocationCreatedHandler implements IEventHandler<LocationCreatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: LocationCreatedEvent) {
    const {
      data: { id, ...rest },
      metadata,
    } = event;
    await this.prisma.location.create({
      data: {
        id,
        ...rest,
        created_at: metadata.created_at,
      },
    });
  }
}
