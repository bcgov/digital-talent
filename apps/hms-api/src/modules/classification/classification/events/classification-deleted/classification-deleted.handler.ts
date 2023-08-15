import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { ClassificationDeletedEvent } from './classification-deleted.event';

@EventsHandler(ClassificationDeletedEvent)
export class ClassificationDeletedHandler implements IEventHandler<ClassificationDeletedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: ClassificationDeletedEvent) {
    const {
      data: { id },
      metadata,
    } = event;

    await this.prisma.classification.update({
      where: { id },
      data: {
        deleted_at: metadata.created_at,
      },
    });
  }
}
