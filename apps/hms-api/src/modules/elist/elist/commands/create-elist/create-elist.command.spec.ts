import { Metadata } from '../../../../event-store/types/metadata.type';
import { CreateElistInput } from '../../inputs/create-elist.input';
import { CreateElistCommand } from './create-elist.command';

describe('CreateElistCommand', () => {
  const mockData: CreateElistInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    applicant_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    rank: 5,
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const command = new CreateElistCommand(mockData, mockMetadata);

    expect(command.data).toEqual(mockData);
    expect(command.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "CreateElistCommand"', () => {
    const command = new CreateElistCommand(mockData, mockMetadata);

    expect(command.type).toBe('CreateElistCommand');
  });
});
