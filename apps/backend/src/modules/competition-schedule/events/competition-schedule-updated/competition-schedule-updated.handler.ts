import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { CompetitionScheduleUpdatedEvent } from './competition-schedule-updated.event';

@EventsHandler(CompetitionScheduleUpdatedEvent)
export class CompetitionScheduleUpdatedHandler implements IEventHandler<CompetitionScheduleUpdatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: CompetitionScheduleUpdatedEvent) {
    const {
      data: { id, start_at, end_at, state },
      metadata,
    } = event;

    await this.prisma.competitionSchedule.update({
      where: { id },
      data: {
        start_at,
        end_at,
        state,
        updated_at: metadata.updated_at,
      },
    });
  }
}
