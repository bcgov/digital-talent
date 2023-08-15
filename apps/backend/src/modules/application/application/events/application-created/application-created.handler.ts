import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { ApplicationCreatedEvent } from './application-created.event';

@EventsHandler(ApplicationCreatedEvent)
export class ApplicationCreatedHandler implements IEventHandler<ApplicationCreatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: ApplicationCreatedEvent) {
    const {
      data: { id, applicant_id, json },
      metadata,
    } = event;

    const createObj = {
      data: {
        id,
        applicant: {
          connect: {
            id: applicant_id,
          },
        },
        json,
        created_at: new Date(metadata.created_at),
      },
    };
    await this.prisma.application.create(createObj);
  }
}
