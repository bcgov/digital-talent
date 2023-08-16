import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { ApplicationSkillCreatedEvent } from './application-skill-created.event';

@EventsHandler(ApplicationSkillCreatedEvent)
export class ApplicationSkillCreatedHandler implements IEventHandler<ApplicationSkillCreatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: ApplicationSkillCreatedEvent) {
    const {
      data: { application_id, skill_id, ...rest },
      metadata,
    } = event;
    await this.prisma.applicationSkill.create({
      data: {
        application_id,
        skill_id,
        ...rest,
        created_at: metadata.created_at,
      },
    });
  }
}
