import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { MinistryDeletedEvent } from './ministry-deleted.event';

@EventsHandler(MinistryDeletedEvent)
export class MinistryDeletedHandler implements IEventHandler<MinistryDeletedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: MinistryDeletedEvent) {
    const {
      data: { id },
      metadata,
    } = event;

    await this.prisma.ministry.update({
      where: { id },
      data: {
        deleted_at: metadata.created_at,
      },
    });
  }
}
