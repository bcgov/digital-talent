import { SkillCreatedEvent } from './skill-created/skill-created.event';
import { SkillCreatedHandler } from './skill-created/skill-created.handler';
import { SkillDeletedEvent } from './skill-deleted/skill-deleted.event';
import { SkillDeletedHandler } from './skill-deleted/skill-deleted.handler';
import { SkillUpdatedEvent } from './skill-updated/skill-updated.event';
import { SkillUpdatedHandler } from './skill-updated/skill-updated.handler';

export const SkillEvents = {
  SkillCreatedEvent,
  SkillUpdatedEvent,
  SkillDeletedEvent,
};

export const SkillEventHandlers = [SkillCreatedHandler, SkillUpdatedHandler, SkillDeletedHandler];
