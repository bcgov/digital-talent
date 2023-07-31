import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { PositionDeletedEvent } from './position-deleted.event';

@EventsHandler(PositionDeletedEvent)
export class PositionDeletedHandler implements IEventHandler<PositionDeletedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: PositionDeletedEvent) {
    const {
      data: { id },
      metadata,
    } = event;

    await this.prisma.position.update({
      where: { id },
      data: {
        deleted_at: metadata.created_at,
      },
    });
  }
}
