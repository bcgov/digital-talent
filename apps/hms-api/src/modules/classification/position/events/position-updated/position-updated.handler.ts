import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { PositionUpdatedEvent } from './position-updated.event';

@EventsHandler(PositionUpdatedEvent)
export class PositionUpdatedHandler implements IEventHandler<PositionUpdatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: PositionUpdatedEvent) {
    const {
      data: { id, ...rest },
      metadata,
    } = event;

    await this.prisma.position.update({
      where: { id },
      data: {
        ...rest,
        updated_at: metadata.created_at,
      },
    });
  }
}
