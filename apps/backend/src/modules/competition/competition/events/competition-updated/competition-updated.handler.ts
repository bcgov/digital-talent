import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { CompetitionUpdatedEvent } from './competition-updated.event';

@EventsHandler(CompetitionUpdatedEvent)
export class CompetitionUpdatedHandler implements IEventHandler<CompetitionUpdatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: CompetitionUpdatedEvent) {
    const {
      data: { id, classification_id, recruiter_id, deltek_id, category },
      metadata,
    } = event;

    await this.prisma.competition.update({
      where: { id },
      data: {
        ...(classification_id != null && {
          classification: {
            connect: { id: classification_id },
          },
        }),
        ...(recruiter_id != null && {
          recruiter: {
            connect: { id: recruiter_id },
          },
        }),
        deltek_id,
        category,
        updated_at: metadata.created_at,
      },
    });
  }
}
