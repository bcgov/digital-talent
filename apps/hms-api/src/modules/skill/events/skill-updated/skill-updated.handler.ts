import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { SkillUpdatedEvent } from './skill-updated.event';

@EventsHandler(SkillUpdatedEvent)
export class SkillUpdatedHandler implements IEventHandler<SkillUpdatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: SkillUpdatedEvent) {
    const {
      data: { id, ...rest },
      metadata,
    } = event;

    await this.prisma.skill.update({
      where: { id },
      data: {
        ...rest,
        updated_at: metadata.created_at,
      },
    });
  }
}
