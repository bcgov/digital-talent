import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { GridDeletedEvent } from './grid-deleted.event';

@EventsHandler(GridDeletedEvent)
export class GridDeletedHandler implements IEventHandler<GridDeletedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: GridDeletedEvent) {
    const {
      data: { id },
      metadata,
    } = event;

    await this.prisma.grid.update({
      where: { id },
      data: {
        deleted_at: metadata.created_at,
      },
    });
  }
}
