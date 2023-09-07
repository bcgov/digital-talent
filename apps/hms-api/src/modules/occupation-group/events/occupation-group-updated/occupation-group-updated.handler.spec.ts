import { OccupationGroupUpdatedEvent } from './occupation-group-updated.event';
import { OccupationGroupUpdatedHandler } from './occupation-group-updated.handler';
import { UpdateOccupationGroupInput } from '../../inputs/update-occupation-group.input';
import { Metadata } from '../../../event-store/types/metadata.type';

describe('OccupationGroupUpdatedHandler', () => {
  let handler: OccupationGroupUpdatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { occupationGroup: { update: jest.fn() } };
    handler = new OccupationGroupUpdatedHandler(mockPrismaService);
  });

  it('should handle OccupationGroupUpdatedEvent correctly', async () => {
    // Mock the data for UpdateOccupationGroupInput and Metadata
    const mockUpdateOccupationGroupInput: UpdateOccupationGroupInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      code: 'test_code',
      name: 'test_name',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new OccupationGroupUpdatedEvent(mockUpdateOccupationGroupInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.occupation-group.create was called correctly
    const expectedCreateObj = {
      data: {
        code: 'test_code',
        name: 'test_name',
        updated_at: mockMetadata.created_at,
      },
      where: {
        id: mockUpdateOccupationGroupInput.id,
      },
    };

    expect(mockPrismaService.occupationGroup.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
