import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { SkillCreatedEvent } from './skill-created.event';

@EventsHandler(SkillCreatedEvent)
export class SkillCreatedHandler implements IEventHandler<SkillCreatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: SkillCreatedEvent) {
    const {
      data: { id, ...rest },
      metadata,
    } = event;

    await this.prisma.skill.create({
      data: {
        id,
        ...rest,
        created_at: metadata.created_at,
      },
    });
  }
}
