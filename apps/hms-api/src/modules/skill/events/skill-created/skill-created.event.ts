import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { CreateSkillInput } from '../../inputs/create-skill.input';

export class SkillCreatedEvent implements DomainEvent<'SkillCreatedEvent', CreateSkillInput> {
  readonly type: 'SkillCreatedEvent';

  readonly data: CreateSkillInput;

  readonly metadata: Metadata;

  constructor(data: CreateSkillInput, metadata: Metadata) {
    this.type = 'SkillCreatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
