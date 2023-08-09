import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { CompetitionSkillAddedEvent } from './competition-skill-added.event';

@EventsHandler(CompetitionSkillAddedEvent)
export class CompetitionSkillAddedHandler implements IEventHandler<CompetitionSkillAddedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: CompetitionSkillAddedEvent) {
    const {
      data: { competition_id, skill_id, ...rest },
      metadata,
    } = event;

    await this.prisma.competitionSkill.create({
      data: {
        competition: { connect: { id: competition_id } },
        skill: { connect: { id: skill_id } },
        ...rest,
        created_at: metadata.created_at,
      },
    });
  }
}
