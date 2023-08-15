import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { ApplicationUpdatedEvent } from './application-updated.event';

@EventsHandler(ApplicationUpdatedEvent)
export class ApplicationUpdatedHandler implements IEventHandler<ApplicationUpdatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: ApplicationUpdatedEvent) {
    const {
      data: { id, applicant_id, json },
      metadata,
    } = event;

    await this.prisma.application.update({
      where: { id },
      data: {
        ...(applicant_id != null && {
          applicant: {
            connect: { id: applicant_id },
          },
        }),
        json,
        updated_at: metadata.created_at,
      },
    });
  }
}
