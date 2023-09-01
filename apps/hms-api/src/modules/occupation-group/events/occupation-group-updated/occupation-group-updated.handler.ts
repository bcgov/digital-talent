import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { OccupationGroupUpdatedEvent } from './occupation-group-updated.event';

@EventsHandler(OccupationGroupUpdatedEvent)
export class OccupationGroupUpdatedHandler implements IEventHandler<OccupationGroupUpdatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: OccupationGroupUpdatedEvent) {
    const {
      data: { id, ...rest },
      metadata,
    } = event;

    await this.prisma.occupationGroup.update({
      where: { id },
      data: {
        ...rest,
        updated_at: metadata.created_at,
      },
    });
  }
}
