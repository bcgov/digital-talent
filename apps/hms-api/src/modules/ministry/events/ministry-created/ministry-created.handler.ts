import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { MinistryCreatedEvent } from './ministry-created.event';

@EventsHandler(MinistryCreatedEvent)
export class MinistryCreatedHandler implements IEventHandler<MinistryCreatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: MinistryCreatedEvent) {
    const {
      data: { id, ...rest },
      metadata,
    } = event;

    await this.prisma.ministry.create({
      data: {
        id,
        ...rest,
        created_at: metadata.created_at,
      },
    });
  }
}
