import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { CompetitionScheduleCreatedEvent } from './competition-schedule-created.event';

@EventsHandler(CompetitionScheduleCreatedEvent)
export class CompetitionScheduleCreatedHandler implements IEventHandler<CompetitionScheduleCreatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: CompetitionScheduleCreatedEvent) {
    const {
      data: { id, start_at, end_at, state },
      metadata,
    } = event;

    await this.prisma.competitionSchedule.create({
      data: {
        id,
        start_at,
        end_at,
        state,
        created_at: metadata.created_at,
      },
    });
  }
}
