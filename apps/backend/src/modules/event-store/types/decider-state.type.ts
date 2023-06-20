export type InitialState = { exists: false };
export type ExistsState<T> = { exists: true; data: T };

export type DeciderState<T> = InitialState | ExistsState<T>;
