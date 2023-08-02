import { CompetitionCreatedEvent } from './competition-created.event';

describe('CompetitionCreatedEvent', () => {
  it('should be defined', () => {
    expect(new CompetitionCreatedEvent()).toBeDefined();
  });
});
