import { diff } from '../../../libs/deep-object-diff';
import { DeciderState } from '../types/decider-state.type';

// Returns an object which contains only the primary keys of a record
//   ie: id, foo_id, bar_id
const extractIdentifiersFromCommandData = (data: Record<string, any>) => {
  return Object.fromEntries(Object.entries(data).filter(([key]) => /^(?:\w+_)?id$/.test(key)));
};

// Diff Command & State data and return an object to be used in a DomainEvent
export function decideUpdateEventData<
  Command extends Record<string, any> = Record<string, any>,
  State extends DeciderState<Record<string, any>> = DeciderState<Record<string, any>>,
  Input extends Record<string, any> = Record<string, any>,
>(command: Command, state: State): Input | null {
  if (state.exists === false) return command.data;
  const ids = extractIdentifiersFromCommandData(command.data);
  const delta: Partial<Command> = diff(state.data, command.data);

  const {
    data: { id, ...data },
  } = command;
  const { data: stateData } = state;

  // // Preliminary diff (to detect changes)
  // const delta: Partial<Command> = diff(stateData, data);

  // This is a helper function to check if a value is an object
  function isObject(value: any): boolean {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  }

  // Loop over keys in `data` and compare JSON-like fields
  for (const key in data) {
    if (
      isObject(data[key]) &&
      isObject(stateData[key]) &&
      JSON.stringify(data[key]) !== JSON.stringify(stateData[key])
    ) {
      // If there's a difference in the JSON values, use the whole JSON-like field from the command
      (delta[key as keyof typeof delta] as any) = data[key];
    }
  }

  if (Object.keys(delta).length === 0) return null;

  const retObj = {
    ...ids,
    ...delta,
  } as Input;

  return retObj;
}
