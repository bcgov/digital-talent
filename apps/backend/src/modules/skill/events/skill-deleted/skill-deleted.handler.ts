import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { SkillDeletedEvent } from './skill-deleted.event';

@EventsHandler(SkillDeletedEvent)
export class SkillDeletedHandler implements IEventHandler<SkillDeletedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: SkillDeletedEvent) {
    const {
      data: { id },
      metadata,
    } = event;

    await this.prisma.skill.update({
      where: { id },
      data: {
        deleted_at: metadata.created_at,
      },
    });
  }
}
