import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { ApplicationLocationUpdatedEvent } from './application-location-updated.event';

@EventsHandler(ApplicationLocationUpdatedEvent)
export class ApplicationLocationUpdatedHandler implements IEventHandler<ApplicationLocationUpdatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: ApplicationLocationUpdatedEvent) {
    const {
      data: { application_id, location_id, ...rest },
      metadata,
    } = event;

    await this.prisma.applicationLocation.update({
      where: {
        application_id_location_id: {
          application_id,
          location_id,
        },
      },
      data: {
        ...rest,
        updated_at: metadata.created_at,
      },
    });
  }
}
