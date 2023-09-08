import { CompetitionUpdatedEvent } from './competition-updated.event';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { CompetitionUpdatedHandler } from './competition-updated.handler';
import { UpdateCompetitionInput } from '../../inputs/update-competition.input';

describe('CompetitionUpdatedHandler', () => {
  let handler: CompetitionUpdatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { competition: { update: jest.fn() } };
    handler = new CompetitionUpdatedHandler(mockPrismaService);
  });

  it('should handle CompetitionUpdatedEvent correctly', async () => {
    // Mock the data for UpdateCompetitionInput and Metadata
    const mockUpdateCompetitionInput: UpdateCompetitionInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      job_description_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      deltek_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      recruiter_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      category: 'CMH',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new CompetitionUpdatedEvent(mockUpdateCompetitionInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.competition.create was called correctly
    const expectedCreateObj = {
      data: {
        job_description: {
          connect: {
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          },
        },
        deltek_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        recruiter: {
          connect: {
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          },
        },
        category: 'CMH',
        updated_at: mockMetadata.created_at,
      },
      where: {
        id: mockUpdateCompetitionInput.id,
      },
    };

    expect(mockPrismaService.competition.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
