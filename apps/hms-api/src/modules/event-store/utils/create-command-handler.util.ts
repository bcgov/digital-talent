import {
  ErrorType,
  EventStoreDBClient,
  ExpectedRevision,
  isCommandError,
  jsonEvent,
  NO_STREAM,
  ResolvedEvent,
} from '@eventstore/db-client';
import { CommandHandlerResult } from '../types/command-handler-result.type';
import { DomainEvent } from '../types/domain-event.type';

export type EvolveFn<S, E> = (state: S, event: E) => S;
export type DecideFn<S, E, C> = (state: S, command: C) => E[];

export type Decider<S, E, C> = {
  initialState: S;
  evolve: EvolveFn<S, E>;
  decide: DecideFn<S, E, C>;
};

export async function* handleEmpty(eventStream: AsyncIterable<ResolvedEvent>) {
  try {
    for await (const resolved of eventStream) {
      if (!resolved.event) continue;
      yield resolved.event;
    }
  } catch (error) {
    if (error instanceof Error && isCommandError(error) && error.type === ErrorType.STREAM_NOT_FOUND) return;
    throw error;
  }
}

export const createCommandHandler =
  <S, E extends DomainEvent<string>, C extends DomainEvent<string>>(
    eventStore: EventStoreDBClient,
    getStreamName: (command: C) => string,
    decider: Decider<S, E, C>,
  ) =>
  async (command: C): Promise<CommandHandlerResult> => {
    const streamName = getStreamName(command);
    let state = decider.initialState;
    let revision: ExpectedRevision = NO_STREAM;

    for await (const event of handleEmpty(eventStore.readStream(streamName))) {
      state = decider.evolve(state, event as unknown as E);
      revision = event.revision;
    }
    const newEvents = decider.decide(state, command).map((event) =>
      jsonEvent({
        type: event.type,
        data: event.data,
        metadata: {
          ...command.metadata,
          created_at: new Date().toISOString(), // Set `created_at` for all events
        },
      }),
    );

    const result = await eventStore.appendToStream(streamName, newEvents, { expectedRevision: revision });

    return {
      result,
      events: newEvents,
    };
  };
