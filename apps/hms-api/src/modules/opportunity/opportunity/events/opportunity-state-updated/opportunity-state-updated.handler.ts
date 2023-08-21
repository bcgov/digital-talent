import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { OpportunityStateUpdatedEvent } from './opportunity-state-updated.event';

@EventsHandler(OpportunityStateUpdatedHandler)
export class OpportunityStateUpdatedHandler implements IEventHandler<OpportunityStateUpdatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: OpportunityStateUpdatedEvent) {
    const {
      data: { id, state },
      metadata,
    } = event;

    await this.prisma.opportunity.update({
      where: { id },
      data: {
        state,
        updated_at: metadata.created_at,
      },
    });
  }
}
