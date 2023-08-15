export type InitialState = { exists: false };
export type ExistsState<T, D> = { exists: true; type: T; data: D };

export type DeciderState<D> = InitialState | ExistsState<string, D>;
