import { CompetitionScheduleCreatedEvent } from './competition-schedule-created/competition-schedule-created.event';
import { CompetitionScheduleCreatedHandler } from './competition-schedule-created/competition-schedule-created.handler';
import { CompetitionScheduleUpdatedEvent } from './competition-schedule-updated/competition-schedule-updated.event';
import { CompetitionScheduleUpdatedHandler } from './competition-schedule-updated/competition-schedule-updated.handler';

export const Events = {
  CompetitionScheduleCreatedEvent,
  CompetitionScheduleUpdatedEvent,
};

export const EventHandlers = [CompetitionScheduleCreatedHandler, CompetitionScheduleUpdatedHandler];
