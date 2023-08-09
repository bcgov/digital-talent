import { CompetitionSkillAddedEvent } from './competition-skill-added/competition-skill-added.event';
import { CompetitionSkillAddedHandler } from './competition-skill-added/competition-skill-added.handler';
import { CompetitionSkillRemovedEvent } from './competition-skill-removed/competition-skill-removed.event';
import { CompetitionSkillRemovedHandler } from './competition-skill-removed/competition-skill-removed.handler';

export const CompetitionSkillEvents = {
  CompetitionSkillAddedEvent,
  CompetitionSkillRemovedEvent,
};

export const CompetitionSkillEventHandlers = [CompetitionSkillAddedHandler, CompetitionSkillRemovedHandler];
