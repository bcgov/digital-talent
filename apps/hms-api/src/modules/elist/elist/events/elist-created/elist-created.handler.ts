import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { ElistCreatedEvent } from './elist-created.event';

@EventsHandler(ElistCreatedEvent)
export class ElistCreatedHandler implements IEventHandler<ElistCreatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: ElistCreatedEvent) {
    const {
      data: { id, ...rest },
      metadata,
    } = event;

    const createObj = {
      data: {
        id,
        ...rest,
        created_at: new Date(metadata.created_at),
      },
    };
    await this.prisma.elist.create(createObj);
  }
}
