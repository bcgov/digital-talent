import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { SyncSkillInput } from '../../inputs/sync-skill.input';

export class SyncSkillCommand implements DomainEvent<'SyncSkillCommand', SyncSkillInput> {
  readonly type: 'SyncSkillCommand';

  readonly data: SyncSkillInput;

  readonly metadata: Metadata;

  constructor(data: SyncSkillInput, metadata: Metadata) {
    this.type = 'SyncSkillCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
