import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { OpportunityLocationCreatedEvent } from './opportunity-location-created.event';

@EventsHandler(OpportunityLocationCreatedEvent)
export class OpportunityLocationCreatedHandler implements IEventHandler<OpportunityLocationCreatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: OpportunityLocationCreatedEvent) {
    const {
      data: { opportunity_id, location_id, ...rest },
      metadata,
    } = event;
    await this.prisma.opportunityLocation.create({
      data: {
        opportunity_id,
        location_id,
        ...rest,
        created_at: metadata.created_at,
      },
    });
  }
}
