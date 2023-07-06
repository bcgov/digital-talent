import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { RegionSyncedEvent } from './region-synced.event';

@EventsHandler(RegionSyncedEvent)
export class RegionSyncedHandler implements IEventHandler<RegionSyncedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: RegionSyncedEvent) {
    const {
      data: { id, ...restData },
      metadata: { created_at },
    } = event;

    await this.prisma.region.upsert({
      where: { id },
      create: { id, ...restData, created_at },
      update: { ...restData, updated_at: created_at },
    });
  }
}
