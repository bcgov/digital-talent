import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { JobDescriptionDeletedEvent } from './job-description-deleted.event';

@EventsHandler(JobDescriptionDeletedEvent)
export class JobDescriptionDeletedHandler implements IEventHandler<JobDescriptionDeletedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: JobDescriptionDeletedEvent) {
    const {
      data: { id },
      metadata,
    } = event;

    await this.prisma.jobDescription.update({
      where: { id },
      data: {
        deleted_at: metadata.created_at,
      },
    });
  }
}
