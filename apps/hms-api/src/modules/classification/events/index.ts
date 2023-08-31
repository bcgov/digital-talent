import { ClassificationCreatedEvent } from './classification-created/classification-created.event';
import { ClassificationCreatedHandler } from './classification-created/classification-created.handler';
import { ClassificationDeletedEvent } from './classification-deleted/classification-deleted.event';
import { ClassificationDeletedHandler } from './classification-deleted/classification-deleted.handler';
import { ClassificationUpdatedEvent } from './classification-updated/classification-updated.event';
import { ClassificationUpdatedHandler } from './classification-updated/classification-updated.handler';

export const ClassificationEvents = {
  ClassificationCreatedEvent,
  ClassificationUpdatedEvent,
  ClassificationDeletedEvent,
};

export const ClassificationEventHandlers = [
  ClassificationCreatedHandler,
  ClassificationUpdatedHandler,
  ClassificationDeletedHandler,
];
