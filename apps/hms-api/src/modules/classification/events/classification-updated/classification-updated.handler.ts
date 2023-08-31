import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { ClassificationUpdatedEvent } from './classification-updated.event';

@EventsHandler(ClassificationUpdatedEvent)
export class ClassificationUpdatedHandler implements IEventHandler<ClassificationUpdatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: ClassificationUpdatedEvent) {
    const {
      data: { id, grid_id, occupation_group_id, ...rest },
      metadata,
    } = event;

    await this.prisma.classification.update({
      where: { id },
      data: {
        ...(grid_id != null && {
          grid: {
            connect: { id: grid_id },
          },
        }),
        ...(occupation_group_id != null && {
          occupation_group: {
            connect: { id: occupation_group_id },
          },
        }),
        ...rest,
        updated_at: metadata.created_at,
      },
    });
  }
}
