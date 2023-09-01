import { CompetitionScheduleDeletedEvent } from './competition-schedule-deleted.event';

describe('CompetitionScheduleDeletedEvent', () => {
  it('should be defined', () => {
    expect(new CompetitionScheduleDeletedEvent()).toBeDefined();
  });
});
