import { CompetitionState } from '../../../../@generated/prisma-nestjs-graphql';
import { Metadata } from '../../../event-store/types/metadata.type';
import { CreateCompetitionScheduleInput } from '../../inputs/create-competition-schedule.input';
import { CompetitionScheduleCreatedEvent } from './competition-schedule-created.event';
import { CompetitionScheduleCreatedHandler } from './competition-schedule-created.handler';

describe('CompetitionScheduleCreatedHandler', () => {
  let handler: CompetitionScheduleCreatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { competitionSchedule: { create: jest.fn() } };
    handler = new CompetitionScheduleCreatedHandler(mockPrismaService);
  });

  it('should handle CompetitionScheduleCreatedEvent correctly', async () => {
    // Mock the data for CreateCompetitionScheduleInput and Metadata
    const mockCreateCompetitionScheduleInput: CreateCompetitionScheduleInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      start_at: new Date('2023-08-21T12:00:00Z'),
      end_at: new Date('2023-08-21T12:00:00Z'),
      state: CompetitionState.DRAFT,
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new CompetitionScheduleCreatedEvent(mockCreateCompetitionScheduleInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.competition-schedule.create was called correctly
    const expectedCreateObj = {
      data: {
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        competition: {
          connect: {
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          },
        },
        start_at: new Date('2023-08-21T12:00:00Z'),
        end_at: new Date('2023-08-21T12:00:00Z'),
        state: 'DRAFT',
        created_at: mockMetadata.created_at,
      },
    };

    expect(mockPrismaService.competitionSchedule.create).toHaveBeenCalledWith(expectedCreateObj);
  });
});
