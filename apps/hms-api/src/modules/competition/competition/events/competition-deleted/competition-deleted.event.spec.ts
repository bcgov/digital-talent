import { CompetitionDeletedEvent } from './competition-deleted.event';

describe('CompetitionDeletedEvent', () => {
  it('should be defined', () => {
    expect(new CompetitionDeletedEvent()).toBeDefined();
  });
});
