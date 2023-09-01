import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { OpportunityDeletedEvent } from './opportunity-deleted.event';

@EventsHandler(OpportunityDeletedEvent)
export class OpportunityDeletedHandler implements IEventHandler<OpportunityDeletedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: OpportunityDeletedEvent) {
    const {
      data: { id },
      metadata,
    } = event;

    await this.prisma.opportunity.update({
      where: { id },
      data: {
        deleted_at: metadata.created_at,
      },
    });
  }
}
