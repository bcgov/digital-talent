import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { DeleteSkillInput } from '../../inputs';

export class DeleteSkillCommand implements DomainEvent<'DeleteSkillCommand', DeleteSkillInput> {
  readonly type: 'DeleteSkillCommand';

  readonly data: DeleteSkillInput;

  readonly metadata: Metadata;

  constructor(data: DeleteSkillInput, metadata: Metadata) {
    this.type = 'DeleteSkillCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
