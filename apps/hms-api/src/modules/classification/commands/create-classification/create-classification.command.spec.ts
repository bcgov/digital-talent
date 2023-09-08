import { Metadata } from '../../../event-store/types/metadata.type';
import { CreateClassificationInput } from '../../inputs/create-classification.input';
import { CreateClassificationCommand } from './create-classification.command';

describe('CreateClassificationCommand', () => {
  const mockData: CreateClassificationInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    grid_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    occupation_group_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    rate_adjustment: 0.123,
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const command = new CreateClassificationCommand(mockData, mockMetadata);

    expect(command.data).toEqual(mockData);
    expect(command.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "CreateClassificationCommand"', () => {
    const command = new CreateClassificationCommand(mockData, mockMetadata);

    expect(command.type).toBe('CreateClassificationCommand');
  });
});
