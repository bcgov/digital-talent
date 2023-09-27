import { CompetitionState } from '../../../../../@generated/prisma-nestjs-graphql';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { UpdateCompetitionStateInput } from '../../inputs/update-competition-state.input';
import { CompetitionStateUpdatedEvent } from './competition-state-updated.event';

describe('CompetitionStateUpdatedEvent', () => {
  const mockData: UpdateCompetitionStateInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    state: CompetitionState.DRAFT,
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const event = new CompetitionStateUpdatedEvent(mockData, mockMetadata);

    expect(event.data).toEqual(mockData);
    expect(event.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "CompetitionStateUpdatedEvent"', () => {
    const event = new CompetitionStateUpdatedEvent(mockData, mockMetadata);

    expect(event.type).toBe('CompetitionStateUpdatedEvent');
  });
});
