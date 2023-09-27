import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { CompetitionStateUpdatedEvent } from './competition-state-updated.event';

@EventsHandler(CompetitionStateUpdatedEvent)
export class CompetitionStateUpdatedHandler implements IEventHandler<CompetitionStateUpdatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: CompetitionStateUpdatedEvent) {
    const {
      data: { id, state },
      metadata,
    } = event;

    await this.prisma.competition.update({
      where: { id },
      data: {
        state,
        updated_at: metadata.created_at,
      },
    });
  }
}
