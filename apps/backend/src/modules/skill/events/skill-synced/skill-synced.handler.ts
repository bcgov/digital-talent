import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { SkillSyncedEvent } from './skill-synced.event';

@EventsHandler(SkillSyncedEvent)
export class SkillSyncedHandler implements IEventHandler<SkillSyncedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: SkillSyncedEvent) {
    const {
      data: { id, ...restData },
      metadata: { created_at },
    } = event;

    await this.prisma.skill.upsert({
      where: { id },
      create: { id, ...restData, created_at },
      update: { ...restData, updated_at: created_at },
    });
  }
}
