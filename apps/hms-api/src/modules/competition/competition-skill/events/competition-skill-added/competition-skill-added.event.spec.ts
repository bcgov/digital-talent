import { CompetitionSkillAddedEvent } from './competition-skill-added.event';

describe('CompetitionSkillAddedEvent', () => {
  it('should be defined', () => {
    expect(new CompetitionSkillAddedEvent()).toBeDefined();
  });
});
