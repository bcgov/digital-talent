import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { DeleteSkillInput } from '../../inputs';

export class SkillDeletedEvent implements DomainEvent<'SkillDeletedEvent', DeleteSkillInput> {
  readonly type: 'SkillDeletedEvent';

  readonly data: DeleteSkillInput;

  readonly metadata: Metadata;

  constructor(data: DeleteSkillInput, metadata: Metadata) {
    this.type = 'SkillDeletedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
