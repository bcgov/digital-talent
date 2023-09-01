import { CompetitionCreatedEvent } from './competition-created/competition-created.event';
import { CompetitionCreatedHandler } from './competition-created/competition-created.handler';
import { CompetitionDeletedEvent } from './competition-deleted/competition-deleted.event';
import { CompetitionDeletedHandler } from './competition-deleted/competition-deleted.handler';
import { CompetitionStateUpdatedEvent } from './competition-state-updated/competition-state-updated.event';
import { CompetitionStateUpdatedHandler } from './competition-state-updated/competition-state-updated.handler';
import { CompetitionUpdatedEvent } from './competition-updated/competition-updated.event';
import { CompetitionUpdatedHandler } from './competition-updated/competition-updated.handler';

export const CompetitionEvents = {
  CompetitionCreatedEvent,
  CompetitionUpdatedEvent,
  CompetitionStateUpdatedEvent,
  CompetitionDeletedEvent,
};

export const CompetitionEventHandlers = [
  CompetitionCreatedHandler,
  CompetitionUpdatedHandler,
  CompetitionStateUpdatedHandler,
  CompetitionDeletedHandler,
];
