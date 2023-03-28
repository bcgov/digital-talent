export interface ApiResponse<T = Record<string, unknown>> {
  data: T;
}

export interface ApiPagedResponse<T = Record<string, unknown>> {
  data: T[];
  meta: PageMeta;
}

export interface PageMeta {
  count: number;
}
