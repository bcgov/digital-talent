import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { CompetitionDeletedEvent } from './competition-deleted.event';

@EventsHandler(CompetitionDeletedEvent)
export class CompetitionDeletedHandler implements IEventHandler<CompetitionDeletedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: CompetitionDeletedEvent) {
    const {
      data: { id },
      metadata,
    } = event;

    await this.prisma.competition.update({
      where: { id },
      data: { deleted_at: metadata.created_at },
    });
  }
}
