import { CompetitionStateUpdatedEvent } from './competition-state-updated.event';

describe('CompetitionStateUpdatedEvent', () => {
  it('should be defined', () => {
    expect(new CompetitionStateUpdatedEvent()).toBeDefined();
  });
});
