import { ApplicationSkillUpdatedEvent } from './application-skill-updated.event';

describe('ApplicationSkillUpdatedEvent', () => {
  it('should be defined', () => {
    expect(new ApplicationSkillUpdatedEvent()).toBeDefined();
  });
});
