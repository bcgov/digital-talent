import { Metadata } from '../../../event-store/types/metadata.type';
import { UpdateGridInput } from '../../inputs/update-grid.input';
import { UpdateGridCommand } from './update-grid.command';

describe('UpdateGridCommand', () => {
  const mockData: UpdateGridInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    name: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    steps: [
      {
        name: 1,
        rate_per_hour: 44.1627,
        rate_per_year: 80652.2,
        rate_per_month: 6721.02,
        rate_per_fortnight: 3091.39,
      },
      {
        name: 2,
        rate_per_hour: 45.4873,
        rate_per_year: 83071.2,
        rate_per_month: 6922.6,
        rate_per_fortnight: 3184.11,
      },
    ],
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const command = new UpdateGridCommand(mockData, mockMetadata);

    expect(command.data).toEqual(mockData);
    expect(command.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "UpdateGridCommand"', () => {
    const command = new UpdateGridCommand(mockData, mockMetadata);

    expect(command.type).toBe('UpdateGridCommand');
  });
});
