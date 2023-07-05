import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { MinistrySyncedEvent } from './ministry-synced.event';

@EventsHandler(MinistrySyncedEvent)
export class MinistrySyncedHandler implements IEventHandler<MinistrySyncedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: MinistrySyncedEvent) {
    const {
      data: { id, ...restData },
      metadata: { created_at },
    } = event;

    await this.prisma.ministry.upsert({
      where: { id },
      create: { id, ...restData, created_at },
      update: { ...restData, updated_at: created_at },
    });
  }
}
