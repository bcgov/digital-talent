import { CreateCompetitionInput } from '../../inputs/create-competition.input';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { CompetitionCreatedEvent } from './competition-created.event';

describe('CompetitionCreatedEvent', () => {
  const mockData: CreateCompetitionInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    job_description_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    deltek_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    recruiter_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    category: 'CMH',
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const event = new CompetitionCreatedEvent(mockData, mockMetadata);

    expect(event.data).toEqual(mockData);
    expect(event.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "CompetitionCreatedEvent"', () => {
    const event = new CompetitionCreatedEvent(mockData, mockMetadata);

    expect(event.type).toBe('CompetitionCreatedEvent');
  });
});
