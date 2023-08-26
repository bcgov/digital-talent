import { OpportunitySkillCreatedEvent } from './opportunity-skill-created.event';

describe('OpportunitySkillCreatedEvent', () => {
  it('should be defined', () => {
    expect(new OpportunitySkillCreatedEvent()).toBeDefined();
  });
});
