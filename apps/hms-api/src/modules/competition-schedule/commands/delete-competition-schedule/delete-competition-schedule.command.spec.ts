import { Metadata } from '../../../event-store/types/metadata.type';
import { DeleteCompetitionScheduleInput } from '../../inputs/delete-competition-schedule.input';
import { DeleteCompetitionScheduleCommand } from './delete-competition-schedule.command';

describe('DeleteCompetitionScheduleCommand', () => {
  const mockData: DeleteCompetitionScheduleInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const command = new DeleteCompetitionScheduleCommand(mockData, mockMetadata);

    expect(command.data).toEqual(mockData);
    expect(command.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "DeleteCompetitionScheduleCommand"', () => {
    const command = new DeleteCompetitionScheduleCommand(mockData, mockMetadata);

    expect(command.type).toBe('DeleteCompetitionScheduleCommand');
  });
});
