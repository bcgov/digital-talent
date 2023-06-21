import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { ClassificationSyncedEvent } from './classification-synced.event';

@EventsHandler(ClassificationSyncedEvent)
export class ClassificationSyncedHandler implements IEventHandler<ClassificationSyncedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: ClassificationSyncedEvent) {
    const {
      data: { id, ...restData },
      metadata: { created_at },
    } = event;

    await this.prisma.classification.upsert({
      where: { id },
      create: { id, ...restData, created_at },
      update: { ...restData, updated_at: created_at },
    });
  }
}
