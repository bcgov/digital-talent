import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { JobDescriptionUpdatedEvent } from './job-description-updated.event';

@EventsHandler(JobDescriptionUpdatedEvent)
export class JobDescriptionUpdatedHandler implements IEventHandler<JobDescriptionUpdatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: JobDescriptionUpdatedEvent) {
    const {
      data: { id, classification_id, ...rest },
      metadata,
    } = event;

    await this.prisma.jobDescription.update({
      where: { id },
      data: {
        ...(classification_id != null && {
          classification: {
            connect: { id: classification_id },
          },
        }),
        ...rest,
        updated_at: metadata.created_at,
      },
    });
  }
}
