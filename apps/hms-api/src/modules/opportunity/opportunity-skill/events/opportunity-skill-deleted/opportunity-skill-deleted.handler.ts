import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { OpportunitySkillDeletedEvent } from './opportunity-skill-deleted.event';

@EventsHandler(OpportunitySkillDeletedEvent)
export class OpportunitySkillDeletedHandler implements IEventHandler<OpportunitySkillDeletedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: OpportunitySkillDeletedEvent) {
    const {
      data: { opportunity_id, skill_id },
      metadata,
    } = event;
    await this.prisma.opportunitySkill.update({
      where: {
        opportunity_id_skill_id: {
          opportunity_id,
          skill_id,
        },
      },
      data: {
        deleted_at: metadata.created_at,
      },
    });
  }
}
