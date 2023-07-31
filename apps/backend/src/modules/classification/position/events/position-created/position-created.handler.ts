import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { PositionCreatedEvent } from './position-created.event';

@EventsHandler(PositionCreatedEvent)
export class PositionCreatedHandler implements IEventHandler<PositionCreatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: PositionCreatedEvent) {
    const {
      data: { id, ...rest },
      metadata,
    } = event;

    await this.prisma.position.create({
      data: {
        id,
        ...rest,
        created_at: metadata.created_at,
      },
    });
  }
}
