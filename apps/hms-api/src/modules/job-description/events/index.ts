import { JobDescriptionCreatedEvent } from './job-description-created/job-description-created.event';
import { JobDescriptionCreatedHandler } from './job-description-created/job-description-created.handler';
import { JobDescriptionDeletedEvent } from './job-description-deleted/job-description-deleted.event';
import { JobDescriptionUpdatedEvent } from './job-description-updated/job-description-updated.event';
import { JobDescriptionUpdatedHandler } from './job-description-updated/job-description-updated.handler';

export const JobDescriptionEvents = {
  JobDescriptionCreatedEvent,
  JobDescriptionUpdatedEvent,
  JobDescriptionDeletedEvent,
};

export const JobDescriptionEventHandlers = [
  JobDescriptionCreatedHandler,
  JobDescriptionUpdatedHandler,
  JobDescriptionUpdatedHandler,
];
