import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { GridUpdatedEvent } from './grid-updated.event';

@EventsHandler(GridUpdatedEvent)
export class GridUpdatedHandler implements IEventHandler<GridUpdatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: GridUpdatedEvent) {
    const {
      data: { id, steps, ...rest },
      metadata,
    } = event;

    await this.prisma.grid.update({
      where: { id },
      data: {
        ...rest,
        steps: steps.map((step) => ({ ...step })),
        updated_at: metadata.created_at,
      },
    });
  }
}
