import { CompetitionScheduleUpdatedEvent } from './competition-schedule-updated.event';

describe('CompetitionScheduleUpdatedEvent', () => {
  it('should be defined', () => {
    expect(new CompetitionScheduleUpdatedEvent()).toBeDefined();
  });
});
