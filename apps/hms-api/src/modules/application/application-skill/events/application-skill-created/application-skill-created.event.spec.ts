import { ApplicationSkillCreatedEvent } from './application-skill-created.event';

describe('ApplicationSkillCreatedEvent', () => {
  it('should be defined', () => {
    expect(new ApplicationSkillCreatedEvent()).toBeDefined();
  });
});
