import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { CompetitionState } from '@prisma/client';
import { PrismaService } from '../../../../prisma/prisma.service';
import { CompetitionCreatedEvent } from './competition-created.event';

@EventsHandler(CompetitionCreatedEvent)
export class CompetitionCreatedHandler implements IEventHandler<CompetitionCreatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: CompetitionCreatedEvent) {
    const {
      data: { id, classification_id, recruiter_id, deltek_id, category },
      metadata,
    } = event;

    await this.prisma.competition.create({
      data: {
        id,
        classification: {
          connect: { id: classification_id },
        },
        recruiter: {
          connect: { id: recruiter_id },
        },
        deltek_id,
        category,
        state: CompetitionState.DRAFT,
        metadata: {},
        created_at: metadata.created_at,
      },
    });
  }
}
