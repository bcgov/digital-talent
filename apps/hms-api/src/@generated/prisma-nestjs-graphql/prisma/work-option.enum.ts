import { registerEnumType } from '@nestjs/graphql';

export enum WorkOption {
  REMOTE = 'REMOTE',
  HYBRID = 'HYBRID',
  ON_PREM = 'ON_PREM',
}

registerEnumType(WorkOption, { name: 'WorkOption', description: undefined });
