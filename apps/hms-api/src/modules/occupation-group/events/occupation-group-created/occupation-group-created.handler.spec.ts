import { OccupationGroupCreatedEvent } from './occupation-group-created.event';
import { OccupationGroupCreatedHandler } from './occupation-group-created.handler';
import { CreateOccupationGroupInput } from '../../inputs/create-occupation-group.input';
import { Metadata } from '../../../event-store/types/metadata.type';

describe('OccupationGroupCreatedHandler', () => {
  let handler: OccupationGroupCreatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { occupationGroup: { create: jest.fn() } };
    handler = new OccupationGroupCreatedHandler(mockPrismaService);
  });

  it('should handle OccupationGroupCreatedEvent correctly', async () => {
    // Mock the data for CreateOccupationGroupInput and Metadata
    const mockCreateOccupationGroupInput: CreateOccupationGroupInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      code: 'test_code',
      name: 'test_name',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new OccupationGroupCreatedEvent(mockCreateOccupationGroupInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.occupation-group.create was called correctly
    const expectedCreateObj = {
      data: {
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        code: 'test_code',
        name: 'test_name',
        created_at: mockMetadata.created_at,
      },
    };

    expect(mockPrismaService.occupationGroup.create).toHaveBeenCalledWith(expectedCreateObj);
  });
});
