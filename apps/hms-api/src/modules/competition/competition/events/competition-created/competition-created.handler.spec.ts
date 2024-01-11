import { CompetitionCategory } from '../../../../../@generated/prisma-nestjs-graphql';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { CreateCompetitionInput } from '../../inputs/create-competition.input';
import { CompetitionCreatedEvent } from './competition-created.event';
import { CompetitionCreatedHandler } from './competition-created.handler';

describe('CompetitionCreatedHandler', () => {
  let handler: CompetitionCreatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { competition: { create: jest.fn() } };
    handler = new CompetitionCreatedHandler(mockPrismaService);
  });

  it('should handle CompetitionCreatedEvent correctly', async () => {
    // Mock the data for CreateCompetitionInput and Metadata
    const mockCreateCompetitionInput: CreateCompetitionInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      job_description_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      deltek_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      recruiter_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      category: CompetitionCategory.CMH,
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new CompetitionCreatedEvent(mockCreateCompetitionInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.competition.create was called correctly
    const expectedCreateObj = {
      data: {
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
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
        state: 'DRAFT',
        category: CompetitionCategory.CMH,
        created_at: mockMetadata.created_at,
        metadata: {},
      },
    };

    expect(mockPrismaService.competition.create).toHaveBeenCalledWith(expectedCreateObj);
  });
});
