import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { ApplicationDeletedEvent } from './application-deleted.event';

@EventsHandler(ApplicationDeletedEvent)
export class ApplicationDeletedHandler implements IEventHandler<ApplicationDeletedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: ApplicationDeletedEvent) {
    const {
      data: { id },
      metadata,
    } = event;

    await this.prisma.application.update({
      where: { id },
      data: {
        deleted_at: metadata.created_at,
      },
    });
  }
}
