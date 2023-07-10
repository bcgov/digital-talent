import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { SyncSkillInput } from '../../inputs/sync-skill.input';

export class SkillSyncedEvent implements DomainEvent<'SkillSyncedEvent', SyncSkillInput> {
  readonly type: 'SkillSyncedEvent';

  readonly data: SyncSkillInput;

  readonly metadata: Metadata;

  constructor(data: SyncSkillInput, metadata: Metadata) {
    this.type = 'SkillSyncedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
