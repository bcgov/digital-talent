import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { CountrySyncedEvent } from './country-synced.event';

@EventsHandler(CountrySyncedEvent)
export class CountrySyncedHandler implements IEventHandler<CountrySyncedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: CountrySyncedEvent) {
    const {
      data: { id, ...restData },
      metadata: { created_at },
    } = event;

    await this.prisma.country.upsert({
      where: { id },
      create: { id, ...restData, created_at },
      update: { ...restData, updated_at: created_at },
    });
  }
}
