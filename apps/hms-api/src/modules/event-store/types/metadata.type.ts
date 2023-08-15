export type Metadata = {
  $correlationId?: string;
  $causationId?: string;
  created_at?: string;
  created_by: string;
} & Record<string, unknown>;
