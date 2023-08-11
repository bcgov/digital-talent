import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { ApplicationCreatedEvent } from './application-created.event';

@EventsHandler(ApplicationCreatedEvent)
export class ApplicationCreatedHandler implements IEventHandler<ApplicationCreatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: ApplicationCreatedEvent) {
    const {
      data: { id, applicant_id, json },
      metadata,
    } = event;

    // console.log('application-created.handler.., json: ', json);
    const createObj = {
      data: {
        id,
        applicant: {
          connect: {
            id: applicant_id,
          },
        },
        json: JSON.parse(json), // Assuming that 'json' field is a stringified JSON
        created_at: new Date(metadata.created_at),
      },
    };
    // console.log('createObj: ', createObj);
    await this.prisma.application.create(createObj);
  }
}
