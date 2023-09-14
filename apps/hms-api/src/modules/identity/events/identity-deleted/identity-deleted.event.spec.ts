import { Metadata } from '../../../event-store/types/metadata.type';
import { DeleteIdentityInput } from '../../inputs';
import { IdentityDeletedEvent } from './identity-deleted.event';

describe('IdentityDeletedEvent', () => {
  const mockData: DeleteIdentityInput = {
    sub: 'test_sub',
    identity_provider: 'test_identity_provider',
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const event = new IdentityDeletedEvent(mockData, mockMetadata);

    expect(event.data).toEqual(mockData);
    expect(event.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "IdentityDeletedEvent"', () => {
    const event = new IdentityDeletedEvent(mockData, mockMetadata);

    expect(event.type).toBe('IdentityDeletedEvent');
  });
});
