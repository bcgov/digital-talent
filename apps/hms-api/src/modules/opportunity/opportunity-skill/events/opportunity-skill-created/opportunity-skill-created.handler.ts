import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { OpportunitySkillCreatedEvent } from './opportunity-skill-created.event';

@EventsHandler(OpportunitySkillCreatedEvent)
export class OpportunitySkillCreatedHandler implements IEventHandler<OpportunitySkillCreatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: OpportunitySkillCreatedEvent) {
    const {
      data: { opportunity_id, skill_id, ...rest },
      metadata,
    } = event;
    await this.prisma.opportunitySkill.create({
      data: {
        opportunity_id,
        skill_id,
        ...rest,
        created_at: metadata.created_at,
      },
    });
  }
}
