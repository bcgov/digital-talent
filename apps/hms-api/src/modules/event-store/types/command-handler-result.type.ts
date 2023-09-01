import { AppendResult, JSONEventType } from '@eventstore/db-client';

export type CommandHandlerResult = {
  result: AppendResult;
  events: JSONEventType[];
};
