import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { CitySyncedEvent } from './city-synced.event';

@EventsHandler(CitySyncedEvent)
export class CitySyncedHandler implements IEventHandler<CitySyncedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: CitySyncedEvent) {
    const {
      data: { id, ...restData },
      metadata: { created_at },
    } = event;

    await this.prisma.city.upsert({
      where: { id },
      create: { id, ...restData, created_at },
      update: { ...restData, updated_at: created_at },
    });
  }
}
