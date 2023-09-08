import { Metadata } from '../../../event-store/types/metadata.type';
import { CreateIdentityInput } from '../../inputs/create-identity.input';
import { CreateIdentityCommand } from './create-identity.command';

describe('CreateIdentityCommand', () => {
  const mockData: CreateIdentityInput = {
    user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    sub: 'test_sub',
    identity_provider: 'test_identity_provider',
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const command = new CreateIdentityCommand(mockData, mockMetadata);

    expect(command.data).toEqual(mockData);
    expect(command.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "CreateIdentityCommand"', () => {
    const command = new CreateIdentityCommand(mockData, mockMetadata);

    expect(command.type).toBe('CreateIdentityCommand');
  });
});
