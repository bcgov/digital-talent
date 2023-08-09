import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { UpdateSkillInput } from '../../inputs/update-skill.input';

export class UpdateSkillCommand implements DomainEvent<'UpdateSkillCommand', UpdateSkillInput> {
  readonly type: 'UpdateSkillCommand';

  readonly data: UpdateSkillInput;

  readonly metadata: Metadata;

  constructor(data: UpdateSkillInput, metadata: Metadata) {
    this.type = 'UpdateSkillCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
