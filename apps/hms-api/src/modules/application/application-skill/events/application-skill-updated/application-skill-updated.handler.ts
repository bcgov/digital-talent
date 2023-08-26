import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { ApplicationSkillUpdatedEvent } from './application-skill-updated.event';

@EventsHandler(ApplicationSkillUpdatedEvent)
export class ApplicationSkillUpdatedHandler implements IEventHandler<ApplicationSkillUpdatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: ApplicationSkillUpdatedEvent) {
    const {
      data: { application_id, skill_id, ...rest },
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
        ...rest,
        updated_at: metadata.created_at,
      },
    });
  }
}
