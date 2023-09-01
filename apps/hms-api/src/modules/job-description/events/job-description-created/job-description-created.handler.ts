import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { JobDescriptionCreatedEvent } from './job-description-created.event';

@EventsHandler(JobDescriptionCreatedEvent)
export class JobDescriptionCreatedHandler implements IEventHandler<JobDescriptionCreatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: JobDescriptionCreatedEvent) {
    const {
      data: { id, classification_id, ...rest },
      metadata,
    } = event;

    await this.prisma.jobDescription.create({
      data: {
        id,
        classification: {
          connect: { id: classification_id },
        },
        ...rest,
        created_at: metadata.created_at,
      },
    });
  }
}
