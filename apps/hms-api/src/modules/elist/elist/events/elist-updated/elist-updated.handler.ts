import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { ElistUpdatedEvent } from './elist-updated.event';

@EventsHandler(ElistUpdatedEvent)
export class ElistUpdatedHandler implements IEventHandler<ElistUpdatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: ElistUpdatedEvent) {
    const {
      data: { id, ...rest },
      metadata,
    } = event;

    await this.prisma.elist.update({
      where: { id },
      data: {
        ...rest,
        updated_at: metadata.created_at,
      },
    });
  }
}
