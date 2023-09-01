import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { MinistryUpdatedEvent } from './ministry-updated.event';

@EventsHandler(MinistryUpdatedEvent)
export class MinistryUpdatedHandler implements IEventHandler<MinistryUpdatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: MinistryUpdatedEvent) {
    const {
      data: { id, ...rest },
      metadata,
    } = event;

    await this.prisma.ministry.update({
      where: { id },
      data: {
        ...rest,
        updated_at: metadata.created_at,
      },
    });
  }
}
