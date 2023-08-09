import { SkillCreatedEvent } from './skill-created.event';

describe('SkillCreatedEvent', () => {
  it('should be defined', () => {
    expect(new SkillCreatedEvent()).toBeDefined();
  });
});
