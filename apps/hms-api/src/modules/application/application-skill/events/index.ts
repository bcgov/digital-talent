import { ApplicationSkillCreatedEvent } from './application-skill-created/application-skill-created.event';
import { ApplicationSkillCreatedHandler } from './application-skill-created/application-skill-created.handler';
import { ApplicationSkillDeletedEvent } from './application-skill-deleted/application-skill-deleted.event';
import { ApplicationSkillDeletedHandler } from './application-skill-deleted/application-skill-deleted.handler';
import { ApplicationSkillUpdatedEvent } from './application-skill-updated/application-skill-updated.event';
import { ApplicationSkillUpdatedHandler } from './application-skill-updated/application-skill-updated.handler';

export const Events = {
  ApplicationSkillCreatedEvent,
  ApplicationSkillUpdatedEvent,
  ApplicationSkillDeletedEvent,
};

export const ApplicationSkillEventHandlers = [
  ApplicationSkillCreatedHandler,
  ApplicationSkillUpdatedHandler,
  ApplicationSkillDeletedHandler,
];
