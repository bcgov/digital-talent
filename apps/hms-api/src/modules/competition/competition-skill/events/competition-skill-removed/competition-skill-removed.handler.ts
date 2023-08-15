import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { CompetitionSkillRemovedEvent } from './competition-skill-removed.event';

@EventsHandler(CompetitionSkillRemovedEvent)
export class CompetitionSkillRemovedHandler implements IEventHandler<CompetitionSkillRemovedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: CompetitionSkillRemovedEvent) {
    const {
      data: { competition_id, skill_id },
      metadata,
    } = event;

    await this.prisma.competitionSkill.update({
      where: { competition_id_skill_id: { competition_id, skill_id } },
      data: { deleted_at: metadata.created_at },
    });
  }
}
