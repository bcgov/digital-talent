import { CompetitionCategory } from '../../../../../@generated/prisma-nestjs-graphql';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { UpdateCompetitionInput } from '../../inputs/update-competition.input';
import { CompetitionUpdatedEvent } from './competition-updated.event';

describe('CompetitionUpdatedEvent', () => {
  const mockData: UpdateCompetitionInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    job_description_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    deltek_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    recruiter_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    category: CompetitionCategory.CMH,
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const event = new CompetitionUpdatedEvent(mockData, mockMetadata);

    expect(event.data).toEqual(mockData);
    expect(event.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "CompetitionUpdatedEvent"', () => {
    const event = new CompetitionUpdatedEvent(mockData, mockMetadata);

    expect(event.type).toBe('CompetitionUpdatedEvent');
  });
});
