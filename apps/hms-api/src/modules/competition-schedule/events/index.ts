import { CompetitionScheduleCreatedEvent } from './competition-schedule-created/competition-schedule-created.event';
import { CompetitionScheduleCreatedHandler } from './competition-schedule-created/competition-schedule-created.handler';
import { CompetitionScheduleDeletedEvent } from './competition-schedule-deleted/competition-schedule-deleted.event';
import { CompetitionScheduleDeletedHandler } from './competition-schedule-deleted/competition-schedule-deleted.handler';
import { CompetitionScheduleUpdatedEvent } from './competition-schedule-updated/competition-schedule-updated.event';
import { CompetitionScheduleUpdatedHandler } from './competition-schedule-updated/competition-schedule-updated.handler';

export const Events = {
  CompetitionScheduleCreatedEvent,
  CompetitionScheduleUpdatedEvent,
  CompetitionScheduleDeletedEvent,
};

export const EventHandlers = [
  CompetitionScheduleCreatedHandler,
  CompetitionScheduleUpdatedHandler,
  CompetitionScheduleDeletedHandler,
];
