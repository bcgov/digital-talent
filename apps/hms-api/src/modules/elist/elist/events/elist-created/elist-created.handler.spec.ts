import { ElistCreatedEvent } from './elist-created.event';
import { ElistCreatedHandler } from './elist-created.handler';
import { CreateElistInput } from '../../inputs/create-elist.input';
import { Metadata } from '../../../../event-store/types/metadata.type';

describe('ElistCreatedHandler', () => {
  let handler: ElistCreatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { elist: { create: jest.fn() } };
    handler = new ElistCreatedHandler(mockPrismaService);
  });

  it('should handle ElistCreatedEvent correctly', async () => {
    // Mock the data for CreateElistInput and Metadata
    const mockCreateElistInput: CreateElistInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      applicant_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      rank: 5,
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new ElistCreatedEvent(mockCreateElistInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.elist.create was called correctly
    const expectedCreateObj = {
      data: {
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        applicant_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        rank: 5,
        created_at: mockMetadata.created_at,
      },
    };

    expect(mockPrismaService.elist.create).toHaveBeenCalledWith(expectedCreateObj);
  });
});
