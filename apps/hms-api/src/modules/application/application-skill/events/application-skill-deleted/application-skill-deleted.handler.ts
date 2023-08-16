import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { ApplicationSkillDeletedEvent } from './application-skill-deleted.event';

@EventsHandler(ApplicationSkillDeletedEvent)
export class ApplicationSkillDeletedHandler implements IEventHandler<ApplicationSkillDeletedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: ApplicationSkillDeletedEvent) {
    const {
      data: { application_id, skill_id },
      metadata,
    } = event;

    await this.prisma.applicationSkill.update({
      where: {
        application_id_skill_id: {
          application_id,
          skill_id,
        },
      },
      data: {
        deleted_at: metadata.created_at,
      },
    });
  }
}
