import { OpportunitySkillCreatedEvent } from './opportunity-skill-created/opportunity-skill-created.event';
import { OpportunitySkillCreatedHandler } from './opportunity-skill-created/opportunity-skill-created.handler';
import { OpportunitySkillDeletedEvent } from './opportunity-skill-deleted/opportunity-skill-deleted.event';
import { OpportunitySkillDeletedHandler } from './opportunity-skill-deleted/opportunity-skill-deleted.handler';

export const Events = {
  OpportunitySkillCreatedEvent,
  OpportunitySkillDeletedEvent,
};

export const OpportunitySkillEventHandlers = [OpportunitySkillCreatedHandler, OpportunitySkillDeletedHandler];
