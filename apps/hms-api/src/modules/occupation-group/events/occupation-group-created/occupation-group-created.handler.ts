import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { OccupationGroupCreatedEvent } from './occupation-group-created.event';

@EventsHandler(OccupationGroupCreatedEvent)
export class OccupationGroupCreatedHandler implements IEventHandler<OccupationGroupCreatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: OccupationGroupCreatedEvent) {
    const {
      data: { id, ...rest },
      metadata,
    } = event;

    await this.prisma.occupationGroup.create({
      data: {
        id,
        ...rest,
        created_at: metadata.created_at,
      },
    });
  }
}
