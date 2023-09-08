import { DeleteCompetitionScheduleInput } from '../../inputs/delete-competition-schedule.input';
import { Metadata } from '../../../event-store/types/metadata.type';
import { CompetitionScheduleDeletedEvent } from './competition-schedule-deleted.event';

describe('CompetitionScheduleDeletedEvent', () => {
  const mockData: DeleteCompetitionScheduleInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const event = new CompetitionScheduleDeletedEvent(mockData, mockMetadata);

    expect(event.data).toEqual(mockData);
    expect(event.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "CompetitionScheduleDeletedEvent"', () => {
    const event = new CompetitionScheduleDeletedEvent(mockData, mockMetadata);

    expect(event.type).toBe('CompetitionScheduleDeletedEvent');
  });
});
