import { EventStoreDBClient } from '@eventstore/db-client';

// This function is used to resolve foreign key reerences between streams, and prevent continued exection when
// the reference does not exist
export async function resolveReferences(obj: Record<string, any>, eventStore: EventStoreDBClient) {
  const streamsToResolve: string[] = Object.entries(obj)
    .filter(([key]) => key.endsWith('_id'))
    .map(([key, value]) => `${key.replace('_id', '').replace('_', '-')}-${value}`);

  for await (const stream of streamsToResolve) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for await (const event of eventStore.readStream(stream, { fromRevision: 'start', maxCount: 1 })) {
      // Peek the stream stack
      // Throw error if stream does not exist
    }
  }
}
