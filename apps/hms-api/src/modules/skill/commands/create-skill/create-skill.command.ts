import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { CreateSkillInput } from '../../inputs/create-skill.input';

export class CreateSkillCommand implements DomainEvent<'CreateSkillCommand', CreateSkillInput> {
  readonly type: 'CreateSkillCommand';

  readonly data: CreateSkillInput;

  readonly metadata: Metadata;

  constructor(data: CreateSkillInput, metadata: Metadata) {
    this.type = 'CreateSkillCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
