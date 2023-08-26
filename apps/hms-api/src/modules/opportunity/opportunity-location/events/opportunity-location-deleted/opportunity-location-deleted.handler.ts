import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { OpportunityLocationDeletedEvent } from './opportunity-location-deleted.event';

@EventsHandler(OpportunityLocationDeletedEvent)
export class OpportunityLocationDeletedHandler implements IEventHandler<OpportunityLocationDeletedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: OpportunityLocationDeletedEvent) {
    const {
      data: { opportunity_id, location_id },
      metadata,
    } = event;

    await this.prisma.opportunityLocation.update({
      where: {
        opportunity_id_location_id: {
          opportunity_id,
          location_id,
        },
      },
      data: {
        deleted_at: metadata.created_at,
      },
    });
  }
}
