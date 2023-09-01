import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { OpportunityState } from '@prisma/client';
import { PrismaService } from '../../../../prisma/prisma.service';
import { OpportunityCreatedEvent } from './opportunity-created.event';

@EventsHandler(OpportunityCreatedEvent)
export class OpportunityCreatedHandler implements IEventHandler<OpportunityCreatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: OpportunityCreatedEvent) {
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

    const createObj = {
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
        state: OpportunityState.SUBMITTED,
        involvement,
        work_option,
        description,
        candidate_description,
        team_name,
        team_description,
        work_examples,
        created_at: metadata.created_at,
      },
    };

    await this.prisma.opportunity.create(createObj);
  }
}
