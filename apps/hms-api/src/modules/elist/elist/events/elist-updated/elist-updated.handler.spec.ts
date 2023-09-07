import { ElistUpdatedEvent } from './elist-updated.event';
import { ElistUpdatedHandler } from './elist-updated.handler';
import { UpdateElistInput } from '../../inputs/update-elist.input';
import { Metadata } from '../../../../event-store/types/metadata.type';

describe('ElistUpdatedHandler', () => {
  let handler: ElistUpdatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { elist: { update: jest.fn() } };
    handler = new ElistUpdatedHandler(mockPrismaService);
  });

  it('should handle ElistUpdatedEvent correctly', async () => {
    // Mock the data for UpdateElistInput and Metadata
    const mockUpdateElistInput: UpdateElistInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      applicant_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      rank: 5,
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new ElistUpdatedEvent(mockUpdateElistInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.elist.create was called correctly
    const expectedCreateObj = {
      data: {
        applicant_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        rank: 5,
        updated_at: mockMetadata.created_at,
      },
      where: {
        id: mockUpdateElistInput.id,
      },
    };

    expect(mockPrismaService.elist.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
