import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { OccupationGroupDeletedEvent } from './occupation-group-deleted.event';

@EventsHandler(OccupationGroupDeletedEvent)
export class OccupationGroupDeletedHandler implements IEventHandler<OccupationGroupDeletedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: OccupationGroupDeletedEvent) {
    const {
      data: { id },
      metadata,
    } = event;

    await this.prisma.occupationGroup.update({
      where: { id },
      data: { deleted_at: metadata.created_at },
    });
  }
}
