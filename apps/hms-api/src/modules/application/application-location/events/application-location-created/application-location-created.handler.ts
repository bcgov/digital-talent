import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { ApplicationLocationCreatedEvent } from './application-location-created.event';

@EventsHandler(ApplicationLocationCreatedEvent)
export class ApplicationLocationCreatedHandler implements IEventHandler<ApplicationLocationCreatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: ApplicationLocationCreatedEvent) {
    const {
      data: { application_id, location_id, ...rest },
      metadata,
    } = event;
    await this.prisma.applicationLocation.create({
      data: {
        application_id,
        location_id,
        ...rest,
        created_at: metadata.created_at,
      },
    });
  }
}
