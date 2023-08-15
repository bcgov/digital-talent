import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { CompetitionScheduleDeletedEvent } from './competition-schedule-deleted.event';

@EventsHandler(CompetitionScheduleDeletedEvent)
export class CompetitionScheduleDeletedHandler implements IEventHandler<CompetitionScheduleDeletedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: CompetitionScheduleDeletedEvent) {
    const {
      data: { id },
      metadata,
    } = event;

    await this.prisma.competitionSchedule.update({
      where: { id },
      data: {
        deleted_at: metadata.created_at,
      },
    });
  }
}
