import { CompetitionCreatedEvent } from './competition-created/competition-created.event';
import { CompetitionCreatedHandler } from './competition-created/competition-created.handler';
import { CompetitionDeletedEvent } from './competition-deleted/competition-deleted.event';
import { CompetitionDeletedHandler } from './competition-deleted/competition-deleted.handler';
import { CompetitionUpdatedEvent } from './competition-updated/competition-updated.event';
import { CompetitionUpdatedHandler } from './competition-updated/competition-updated.handler';

export const CompetitionEvents = {
  CompetitionCreatedEvent,
  CompetitionUpdatedEvent,
  CompetitionDeletedEvent,
};

export const CompetitionEventHandlers = [
  CompetitionCreatedHandler,
  CompetitionUpdatedHandler,
  CompetitionDeletedHandler,
];
