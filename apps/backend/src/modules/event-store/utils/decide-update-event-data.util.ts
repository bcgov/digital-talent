// import { diff } from 'deep-object-diff';
// import { intersectingKeys } from '../../../utils/intersecting-keys.util';
import { diff } from '../../../libs/deep-object-diff';
import { DeciderState } from '../types/decider-state.type';

// Diff Command & State data and return an object to be used in a DomainEvent
export function decideUpdateEventData<
  Command extends Record<string, any> = Record<string, any>,
  State extends DeciderState<Record<string, any>> = DeciderState<Record<string, any>>,
  Input extends Record<string, any> = Record<string, any>,
>(command: Command, state: State): Input | null {
  if (state.exists === false) return command.data;

  const {
    data: { id, ...data },
  } = command;
  const { data: stateData } = state;

  const delta: Partial<Command> = diff(stateData, data);

  if (Object.keys(delta).length === 0) return null;

  return {
    id,
    ...delta,
  } as { id: string } & Input;
}
