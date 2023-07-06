import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { ProvinceSyncedEvent } from './province-synced.event';

@EventsHandler(ProvinceSyncedEvent)
export class ProvinceSyncedHandler implements IEventHandler<ProvinceSyncedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: ProvinceSyncedEvent) {
    const {
      data: { id, ...restData },
      metadata: { created_at },
    } = event;

    await this.prisma.province.upsert({
      where: { id },
      create: { id, ...restData, created_at },
      update: { ...restData, updated_at: created_at },
    });
  }
}
