import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { GridCreatedEvent } from './grid-created.event';

@EventsHandler(GridCreatedEvent)
export class GridCreatedHandler implements IEventHandler<GridCreatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: GridCreatedEvent) {
    const {
      data: { id, steps, ...rest },
      metadata,
    } = event;

    await this.prisma.grid.create({
      data: {
        id,
        ...rest,
        steps: steps.map((step) => ({ ...step })),
        created_at: metadata.created_at,
      },
    });
  }
}
