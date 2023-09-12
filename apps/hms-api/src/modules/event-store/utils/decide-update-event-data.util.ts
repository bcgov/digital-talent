import { diff } from '../../../libs/deep-object-diff';
import { DeciderState } from '../types/decider-state.type';

// Returns an object which contains only the primary keys of a record
//   ie: id, foo_id, bar_id
export const extractIdentifiersFromCommandData = (data: Record<string, any>) => {
  return Object.fromEntries(Object.entries(data).filter(([key]) => /^(?:\w+_)?id$/.test(key)));
};

// Diff Command & State data and return an object to be used in a DomainEvent
export function decideUpdateEventData<
  Command extends Record<string, any> = Record<string, any>,
  State extends DeciderState<Record<string, any>> = DeciderState<Record<string, any>>,
  Input extends Record<string, any> = Record<string, any>,
>(command: Command, state: State, processJsonFieldsFunc = processJsonFields): Input | null {
  if (state.exists === false) return command.data;
  const ids = extractIdentifiersFromCommandData(command.data);
  const delta: Partial<Command> = diff(state.data, command.data);

  processJsonFieldsFunc(command, state, delta);

  if (Object.keys(delta).length === 0) return null;

  const retObj = {
    ...ids,
    ...delta,
  } as Input;

  return retObj;
}

export function processJsonFields<
  Command extends Record<string, any> = Record<string, any>,
  State extends DeciderState<Record<string, any>> = DeciderState<Record<string, any>>,
>(command: Command, state: State, delta: Partial<Command>): void {
  // Accommodate json fields (specifically for the "json" field in the Application module).
  // Original code would attempt to marge and update the field, but it should overwrite
  // the whole field if any part of it has changed.
  if (state.exists === false) return;

  const {
    data: { id, ...data },
  } = command;
  const { data: stateData } = state;

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
      // eslint-disable-next-line no-param-reassign
      (delta[key as keyof typeof delta] as any) = data[key];
    }
  }
}
