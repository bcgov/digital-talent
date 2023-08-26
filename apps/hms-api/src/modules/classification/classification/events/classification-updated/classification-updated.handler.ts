import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { ClassificationUpdatedEvent } from './classification-updated.event';

@EventsHandler(ClassificationUpdatedEvent)
export class ClassificationUpdatedHandler implements IEventHandler<ClassificationUpdatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: ClassificationUpdatedEvent) {
    const {
      data: { id, ...rest },
      metadata,
    } = event;

    await this.prisma.classification.update({
      where: { id },
      data: {
        ...rest,
        updated_at: metadata.created_at,
      },
    });
  }
}
