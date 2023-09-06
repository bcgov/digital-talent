import { IdentityDeletedEvent } from './identity-deleted.event';
import { IdentityDeletedHandler } from './identity-deleted.handler';
import { Metadata } from '../../../event-store/types/metadata.type';
import { DeleteIdentityInput } from '../../inputs';

describe('IdentityDeletedHandler', () => {
  let handler: IdentityDeletedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { identity: { update: jest.fn() } };
    handler = new IdentityDeletedHandler(mockPrismaService);
  });

  it('should handle IdentityDeletedEvent correctly', async () => {
    // Mock the data for DeleteIdentityInput and Metadata
    const mockDeleteIdentityInput: DeleteIdentityInput = {
      sub: 'test_sub',
      identity_provider: 'test_identity_provider',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new IdentityDeletedEvent(mockDeleteIdentityInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.identity.create was called correctly
    const expectedCreateObj = {
      data: {
        deleted_at: mockMetadata.created_at,
      },
      where: { sub_identity_provider: { sub: 'test_sub', identity_provider: 'test_identity_provider' } },
    };

    expect(mockPrismaService.identity.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
