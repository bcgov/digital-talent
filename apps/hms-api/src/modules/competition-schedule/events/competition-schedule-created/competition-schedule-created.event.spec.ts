import { CompetitionScheduleCreatedEvent } from './competition-schedule-created.event';

describe('CompetitionScheduleCreatedEvent', () => {
  it('should be defined', () => {
    expect(new CompetitionScheduleCreatedEvent()).toBeDefined();
  });
});
