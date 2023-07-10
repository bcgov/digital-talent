import { SkillSyncedEvent } from './skill-synced/skill-synced.event';
import { SkillSyncedHandler } from './skill-synced/skill-synced.handler';

export const Events = {
  SkillSyncedEvent,
};

export const EventHandlers = [SkillSyncedHandler];
