import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { ElistDeletedEvent } from './elist-deleted.event';

@EventsHandler(ElistDeletedEvent)
export class ElistDeletedHandler implements IEventHandler<ElistDeletedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: ElistDeletedEvent) {
    const {
      data: { id },
      metadata,
    } = event;

    await this.prisma.elist.update({
      where: { id },
      data: {
        deleted_at: metadata.created_at,
      },
    });
  }
}
