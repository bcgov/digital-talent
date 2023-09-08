import { Metadata } from '../../../event-store/types/metadata.type';
import { CreateJobDescriptionInput } from '../../inputs/create-job-description.input';
import { CreateJobDescriptionCommand } from './create-job-description.command';

describe('CreateJobDescriptionCommand', () => {
  const mockData: CreateJobDescriptionInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    classification_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    e_class_id: 'test_e_class_id',
    name: 'test_name',
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const command = new CreateJobDescriptionCommand(mockData, mockMetadata);

    expect(command.data).toEqual(mockData);
    expect(command.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "CreateJobDescriptionCommand"', () => {
    const command = new CreateJobDescriptionCommand(mockData, mockMetadata);

    expect(command.type).toBe('CreateJobDescriptionCommand');
  });
});
