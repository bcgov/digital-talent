import { Metadata } from '../../../event-store/types/metadata.type';
import { UpdateCompetitionScheduleInput } from '../../inputs/update-competition-schedule.input';
import { UpdateCompetitionScheduleCommand } from './update-competition-schedule.command';

describe('UpdateCompetitionScheduleCommand', () => {
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
    const command = new UpdateCompetitionScheduleCommand(mockData, mockMetadata);

    expect(command.data).toEqual(mockData);
    expect(command.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "UpdateCompetitionScheduleCommand"', () => {
    const command = new UpdateCompetitionScheduleCommand(mockData, mockMetadata);

    expect(command.type).toBe('UpdateCompetitionScheduleCommand');
  });
});
