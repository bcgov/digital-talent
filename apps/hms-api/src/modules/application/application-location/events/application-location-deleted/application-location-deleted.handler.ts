import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { ApplicationLocationDeletedEvent } from './application-location-deleted.event';

@EventsHandler(ApplicationLocationDeletedEvent)
export class ApplicationLocationDeletedHandler implements IEventHandler<ApplicationLocationDeletedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: ApplicationLocationDeletedEvent) {
    const {
      data: { application_id, location_id },
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
        deleted_at: metadata.created_at,
      },
    });
  }
}
