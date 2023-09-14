import { ErrorType, EventStoreDBClient, ResolvedEvent } from '@eventstore/db-client';

jest.mock('@eventstore/db-client', () => ({
  ...jest.requireActual('@eventstore/db-client'),
  isCommandError: jest.fn().mockReturnValue(true),
}));

// eslint-disable-next-line import/first
import { createCommandHandler, handleEmpty } from './create-command-handler.util';
// eslint-disable-next-line import/first
import { DomainEvent } from '../types/domain-event.type';

describe('handleEmpty', () => {
  it('should yield events for resolved objects with events', async () => {
    const mockEvent = { data: 'test' };
    const mockEventStream = {
      // eslint-disable-next-line func-names, object-shorthand
      [Symbol.asyncIterator]: function* () {
        yield { event: mockEvent };
        yield { event: null };
      },
    };

    const result = [];
    for await (const event of handleEmpty(mockEventStream as any)) {
      result.push(event);
    }

    expect(result).toEqual([mockEvent]);
  });

  it('should handle STREAM_NOT_FOUND error gracefully', async () => {
    const mockError = new Error('Mock Error');
    (mockError as any).type = ErrorType.STREAM_NOT_FOUND;
    const mockEventStream = {
      // eslint-disable-next-line func-names, object-shorthand, require-yield
      [Symbol.asyncIterator]: async function* () {
        throw mockError;
      },
    };

    const result = [];
    await expect(async () => {
      for await (const event of handleEmpty(mockEventStream as any)) {
        result.push(event);
      }
    }).not.toThrow();

    expect(result).toEqual([]);
  });

  it('should rethrow errors other than STREAM_NOT_FOUND', async () => {
    const mockError = new Error('Mock Error');
    const mockEventStream = {
      // eslint-disable-next-line func-names, object-shorthand, require-yield
      [Symbol.asyncIterator]: function* () {
        throw mockError;
      },
    };

    await expect(async () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      for await (const _ of handleEmpty(mockEventStream as any)) {
        /* empty */
      }
    }).rejects.toThrow(mockError);
  });
});

describe('createCommandHandler', () => {
  let mockEventStore: jest.Mocked<EventStoreDBClient>;
  let mockGetStreamName: jest.Mock;
  let mockDecider: {
    initialState: any;
    evolve: jest.Mock;
    decide: jest.Mock;
  };

  beforeEach(() => {
    mockEventStore = {
      readStream: jest.fn(),
      appendToStream: jest.fn(),
    } as any;
    mockGetStreamName = jest.fn();
    mockDecider = {
      initialState: {},
      evolve: jest.fn(),
      decide: jest.fn().mockReturnValue([]),
    };
  });

  it('should correctly handle events returned by eventStore.readStream', async () => {
    // Setup
    const mockEvent: ResolvedEvent = {
      event: {
        streamId: 'someStreamId',
        id: 'someId',
        isJson: true,
        revision: BigInt(0),
        type: 'SomeEvent',
        created: new Date(),
        data: {},
        metadata: {},
      },
      link: null,
    };

    mockEventStore.readStream.mockReturnValueOnce({
      // eslint-disable-next-line func-names, object-shorthand, require-yield
      [Symbol.asyncIterator]: async function* () {
        yield mockEvent;
      },
    } as any);

    // Act
    const handler = createCommandHandler(mockEventStore, mockGetStreamName, mockDecider);
    await handler({} as any);

    // Assert
    expect(mockDecider.evolve).toHaveBeenCalledWith(mockDecider.initialState, mockEvent.event);
  });

  it('should correctly handle STREAM_NOT_FOUND error from eventStore.readStream', async () => {
    // Setup
    const error = new Error('Stream not found');
    (error as any).type = ErrorType.STREAM_NOT_FOUND;

    mockEventStore.readStream.mockImplementationOnce(
      () =>
        ({
          // eslint-disable-next-line func-names, object-shorthand, require-yield
          [Symbol.asyncIterator]: async function* () {
            throw error;
          },
        } as any),
    );

    // Act
    const handler = createCommandHandler(mockEventStore, mockGetStreamName, mockDecider);
    await handler({} as any);

    // Assert
    expect(mockDecider.evolve).not.toHaveBeenCalled();
  });

  it('should throw unexpected errors from eventStore.readStream', async () => {
    // Setup
    const error = new Error('Some other error');
    mockEventStore.readStream.mockImplementationOnce(() => {
      throw error;
    });

    // Act & Assert
    const handler = createCommandHandler(mockEventStore, mockGetStreamName, mockDecider);
    await expect(handler({} as any)).rejects.toThrow(error);
  });

  it('should call appendToStream with correct arguments', async () => {
    // Setup
    const mockCommand = { type: 'SomeCommand', data: {} };
    const mockEvent: DomainEvent<string> = { type: 'SomeEvent', data: {}, metadata: { created_by: 'mockCreator' } };

    mockDecider.decide.mockReturnValue([mockEvent]);
    mockGetStreamName.mockReturnValue('mockStreamName');
    mockEventStore.readStream.mockReturnValueOnce({
      // eslint-disable-next-line func-names, object-shorthand, require-yield, @typescript-eslint/no-empty-function
      [Symbol.asyncIterator]: async function* () {},
    } as any);

    // Act
    const handler = createCommandHandler(mockEventStore, mockGetStreamName, mockDecider);
    await handler(mockCommand as any);

    expect(mockEventStore.appendToStream).toHaveBeenCalledWith(
      mockGetStreamName(mockCommand),
      expect.arrayContaining([
        expect.objectContaining({
          type: mockEvent.type,
          data: mockEvent.data,
          contentType: 'application/json',
          id: expect.any(String),
          metadata: expect.objectContaining({
            created_at: expect.any(String),
          }),
        }),
      ]),
      { expectedRevision: 'no_stream' },
    );
  });

  it('todo: should not call appendToStream if decide function returns an empty array', async () => {
    // todo: no reason to run on blanks?
    mockEventStore.readStream.mockReturnValueOnce({
      // eslint-disable-next-line func-names, object-shorthand, require-yield, @typescript-eslint/no-empty-function
      [Symbol.asyncIterator]: async function* () {},
    } as any);

    const handler = createCommandHandler(mockEventStore, mockGetStreamName, mockDecider);
    await handler({} as any);

    expect(mockEventStore.appendToStream).not.toHaveBeenCalled();
  });

  it('should evolve state correctly based on events', async () => {
    const mockInitialState = { count: 0 };
    mockDecider.initialState = mockInitialState;
    const mockEvent = { data: { incrementBy: 2 } };

    mockDecider.evolve.mockImplementation((state, event) => ({ count: state.count + event.data.incrementBy }));

    mockEventStore.readStream.mockReturnValueOnce({
      // eslint-disable-next-line func-names, object-shorthand, require-yield
      [Symbol.asyncIterator]: async function* () {
        yield { event: mockEvent };
      },
    } as any);

    const handler = createCommandHandler(mockEventStore, mockGetStreamName, mockDecider);
    await handler({} as any);

    expect(mockDecider.evolve).toHaveBeenCalledWith(mockInitialState, mockEvent);
    expect(mockDecider.decide).toHaveBeenCalledWith({ count: 2 }, expect.anything());
  });

  it('should evolve state in the order of received events', async () => {
    mockDecider.initialState = { count: 0 };
    const mockEvents = [{ data: { incrementBy: 1 } }, { data: { incrementBy: 2 } }, { data: { incrementBy: 3 } }];

    mockEventStore.readStream.mockReturnValueOnce({
      // eslint-disable-next-line func-names, object-shorthand, require-yield
      [Symbol.asyncIterator]: async function* () {
        for (const event of mockEvents) {
          yield { event };
        }
      },
    } as any);

    mockDecider.evolve.mockImplementation((state, event) => ({ count: state.count + event.data.incrementBy }));

    const handler = createCommandHandler(mockEventStore, mockGetStreamName, mockDecider);
    await handler({} as any);

    expect(mockDecider.evolve.mock.calls).toEqual([
      [mockDecider.initialState, mockEvents[0]],
      [{ count: 1 }, mockEvents[1]],
      [{ count: 3 }, mockEvents[2]],
    ]);
  });

  it('should handle errors from appendToStream', async () => {
    const error = new Error('Append Failed');
    mockEventStore.appendToStream.mockRejectedValueOnce(error);
    const mockEvent = { data: { incrementBy: 2 } };

    mockEventStore.readStream.mockReturnValueOnce({
      // eslint-disable-next-line func-names, object-shorthand, require-yield
      [Symbol.asyncIterator]: async function* () {
        yield { mockEvent };
      },
    } as any);

    const handler = createCommandHandler(mockEventStore, mockGetStreamName, mockDecider);
    await expect(handler({} as any)).rejects.toThrow(error);
  });
});
