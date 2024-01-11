import { IdentityCreatedEvent } from './identity-created.event';
import { IdentityCreatedHandler } from './identity-created.handler';
import { CreateIdentityInput } from '../../inputs/create-identity.input';
import { Metadata } from '../../../event-store/types/metadata.type';

describe('IdentityCreatedHandler', () => {
  let handler: IdentityCreatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { identity: { create: jest.fn() } };
    handler = new IdentityCreatedHandler(mockPrismaService);
  });

  it('should handle IdentityCreatedEvent correctly', async () => {
    // Mock the data for CreateIdentityInput and Metadata
    const mockCreateIdentityInput: CreateIdentityInput = {
      user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      sub: 'test_sub',
      identity_provider: 'test_identity_provider',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new IdentityCreatedEvent(mockCreateIdentityInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.identity.create was called correctly
    const expectedCreateObj = {
      data: {
        user: {
          connect: {
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          },
        },
        sub: 'test_sub',
        identity_provider: 'test_identity_provider',
        created_at: mockMetadata.created_at,
      },
    };

    expect(mockPrismaService.identity.create).toHaveBeenCalledWith(expectedCreateObj);
  });
});
