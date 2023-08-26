import { CompetitionScheduleDeletedEvent } from './competition-schedule-deleted.event';
import { CompetitionScheduleDeletedHandler } from './competition-schedule-deleted.handler';
import { Metadata } from '../../../event-store/types/metadata.type';
import { DeleteCompetitionScheduleInput } from '../../inputs/delete-competition-schedule.input';

describe('CompetitionScheduleDeletedHandler', () => {
  let handler: CompetitionScheduleDeletedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { competitionSchedule: { update: jest.fn() } };
    handler = new CompetitionScheduleDeletedHandler(mockPrismaService);
  });

  it('should handle CompetitionScheduleDeletedEvent correctly', async () => {
    // Mock the data for DeleteCompetitionScheduleInput and Metadata
    const mockDeleteCompetitionScheduleInput: DeleteCompetitionScheduleInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new CompetitionScheduleDeletedEvent(mockDeleteCompetitionScheduleInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.competition-schedule.create was called correctly
    const expectedCreateObj = {
      data: {
        deleted_at: mockMetadata.created_at,
      },
      where: {
        id: mockDeleteCompetitionScheduleInput.id,
      },
    };

    expect(mockPrismaService.competitionSchedule.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
