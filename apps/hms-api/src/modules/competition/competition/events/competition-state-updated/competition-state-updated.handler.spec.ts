import { CompetitionStateUpdatedEvent } from './competition-state-updated.event';
import { CompetitionStateUpdatedHandler } from './competition-state-updated.handler';
import { UpdateCompetitionStateInput } from '../../inputs/update-competition-state.input';
import { Metadata } from '../../../../event-store/types/metadata.type';

describe('CompetitionStateUpdatedHandler', () => {
  let handler: CompetitionStateUpdatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { competition: { update: jest.fn() } };
    handler = new CompetitionStateUpdatedHandler(mockPrismaService);
  });

  it('should handle CompetitionStateUpdatedEvent correctly', async () => {
    // Mock the data for UpdateCompetitionStateInput and Metadata
    const mockUpdateCompetitionStateInput: UpdateCompetitionStateInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      state: 'DRAFT',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new CompetitionStateUpdatedEvent(mockUpdateCompetitionStateInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.competition.update was called correctly
    const expectedCreateObj = {
      data: {
        state: 'DRAFT',
        updated_at: mockMetadata.created_at,
      },
      where: {
        id: mockUpdateCompetitionStateInput.id,
      },
    };

    expect(mockPrismaService.competition.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
