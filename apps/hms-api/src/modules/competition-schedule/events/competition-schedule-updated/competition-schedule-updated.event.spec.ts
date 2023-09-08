import { UpdateCompetitionScheduleInput } from '../../inputs/update-competition-schedule.input';
import { Metadata } from '../../../event-store/types/metadata.type';
import { CompetitionScheduleUpdatedEvent } from './competition-schedule-updated.event';

describe('CompetitionScheduleUpdatedEvent', () => {
  const mockData: UpdateCompetitionScheduleInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    start_at: new Date('2023-08-21T12:00:00Z'),
    end_at: new Date('2023-08-21T12:00:00Z'),
    state: 'DRAFT',
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const event = new CompetitionScheduleUpdatedEvent(mockData, mockMetadata);

    expect(event.data).toEqual(mockData);
    expect(event.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "CompetitionScheduleUpdatedEvent"', () => {
    const event = new CompetitionScheduleUpdatedEvent(mockData, mockMetadata);

    expect(event.type).toBe('CompetitionScheduleUpdatedEvent');
  });
});
