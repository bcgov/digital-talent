import { Metadata } from '../../../event-store/types/metadata.type';
import { DeleteIdentityInput } from '../../inputs';
import { DeleteIdentityCommand } from './delete-identity.command';

describe('DeleteIdentityCommand', () => {
  const mockData: DeleteIdentityInput = {
    sub: 'test_sub',
    identity_provider: 'test_identity_provider',
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const command = new DeleteIdentityCommand(mockData, mockMetadata);

    expect(command.data).toEqual(mockData);
    expect(command.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "DeleteIdentityCommand"', () => {
    const command = new DeleteIdentityCommand(mockData, mockMetadata);

    expect(command.type).toBe('DeleteIdentityCommand');
  });
});
