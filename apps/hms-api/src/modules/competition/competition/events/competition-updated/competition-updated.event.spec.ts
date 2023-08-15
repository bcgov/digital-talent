import { CompetitionUpdatedEvent } from './competition-updated.event';

describe('CompetitionUpdatedEvent', () => {
  it('should be defined', () => {
    expect(new CompetitionUpdatedEvent()).toBeDefined();
  });
});
