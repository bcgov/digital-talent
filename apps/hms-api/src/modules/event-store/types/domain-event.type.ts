import { Metadata as MetadataType } from './metadata.type';

export type DomainEvent<
  Type extends string,
  Data extends Record<string, any> = Record<string, any>,
  Metadata = MetadataType,
> = {
  type: Type;
  data: Data;
  metadata: Metadata;
};
