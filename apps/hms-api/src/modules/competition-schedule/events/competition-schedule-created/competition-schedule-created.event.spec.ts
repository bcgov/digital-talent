import { CompetitionState } from '../../../../@generated/prisma-nestjs-graphql';
import { Metadata } from '../../../event-store/types/metadata.type';
import { CreateCompetitionScheduleInput } from '../../inputs/create-competition-schedule.input';
import { CompetitionScheduleCreatedEvent } from './competition-schedule-created.event';

describe('CompetitionScheduleCreatedEvent', () => {
  const mockData: CreateCompetitionScheduleInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    start_at: new Date('2023-08-21T12:00:00Z'),
    end_at: new Date('2023-08-21T12:00:00Z'),
    state: CompetitionState.DRAFT,
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const event = new CompetitionScheduleCreatedEvent(mockData, mockMetadata);

    expect(event.data).toEqual(mockData);
    expect(event.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "CompetitionScheduleCreatedEvent"', () => {
    const event = new CompetitionScheduleCreatedEvent(mockData, mockMetadata);

    expect(event.type).toBe('CompetitionScheduleCreatedEvent');
  });
});
