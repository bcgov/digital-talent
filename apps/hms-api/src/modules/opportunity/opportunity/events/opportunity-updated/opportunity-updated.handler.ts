import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { OpportunityUpdatedEvent } from './opportunity-updated.event';

@EventsHandler(OpportunityUpdatedEvent)
export class OpportunityUpdatedHandler implements IEventHandler<OpportunityUpdatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: OpportunityUpdatedEvent) {
    const {
      data: {
        id,
        competition_id,
        hiring_manager_id,
        ministry_id,
        deltek_id,
        involvement,
        work_option,
        description,
        candidate_description,
        team_name,
        team_description,
        work_examples,
      },
      metadata,
    } = event;

    const updateObj = {
      where: { id },
      data: {
        id,
        competition: {
          connect: {
            id: competition_id,
          },
        },
        hiring_manager: {
          connect: {
            id: hiring_manager_id,
          },
        },
        ministry: {
          connect: {
            id: ministry_id,
          },
        },
        deltek_id,
        involvement,
        work_option,
        description,
        candidate_description,
        team_name,
        team_description,
        work_examples,
        updated_at: metadata.created_at,
      },
    };

    await this.prisma.opportunity.update(updateObj);
  }
}
