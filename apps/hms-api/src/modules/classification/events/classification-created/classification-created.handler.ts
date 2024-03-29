import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { ClassificationCreatedEvent } from './classification-created.event';

@EventsHandler(ClassificationCreatedEvent)
export class ClassificationCreatedHandler implements IEventHandler<ClassificationCreatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: ClassificationCreatedEvent) {
    const {
      data: { id, grid_id, occupation_group_id, ...rest },
      metadata,
    } = event;

    await this.prisma.classification.create({
      data: {
        id,
        grid: {
          connect: { id: grid_id },
        },
        occupation_group: {
          connect: { id: occupation_group_id },
        },
        ...rest,
        created_at: metadata.created_at,
      },
    });
  }
}
