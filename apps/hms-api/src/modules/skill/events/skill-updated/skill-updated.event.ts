import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { UpdateSkillInput } from '../../inputs/update-skill.input';

export class SkillUpdatedEvent implements DomainEvent<'SkillUpdatedEvent', UpdateSkillInput> {
  readonly type: 'SkillUpdatedEvent';

  readonly data: UpdateSkillInput;

  readonly metadata: Metadata;

  constructor(data: UpdateSkillInput, metadata: Metadata) {
    this.type = 'SkillUpdatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
