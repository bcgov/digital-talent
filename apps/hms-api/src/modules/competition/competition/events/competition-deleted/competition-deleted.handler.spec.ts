import { CompetitionDeletedEvent } from './competition-deleted.event';
import { CompetitionDeletedHandler } from './competition-deleted.handler';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteCompetitionInput } from '../../inputs/delete-competition.input';

describe('CompetitionDeletedHandler', () => {
  let handler: CompetitionDeletedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { competition: { update: jest.fn() } };
    handler = new CompetitionDeletedHandler(mockPrismaService);
  });

  it('should handle CompetitionDeletedEvent correctly', async () => {
    // Mock the data for DeleteCompetitionInput and Metadata
    const mockDeleteCompetitionInput: DeleteCompetitionInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new CompetitionDeletedEvent(mockDeleteCompetitionInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.competition.create was called correctly
    const expectedCreateObj = {
      data: {
        deleted_at: mockMetadata.created_at,
      },
      where: {
        id: mockDeleteCompetitionInput.id,
      },
    };

    expect(mockPrismaService.competition.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
