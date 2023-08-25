import { CompetitionScheduleUpdatedEvent } from './competition-schedule-updated.event';
import { CompetitionScheduleUpdatedHandler } from './competition-schedule-updated.handler';
import { UpdateCompetitionScheduleInput } from '../../inputs/update-competition-schedule.input';
import { Metadata } from '../../../event-store/types/metadata.type';

describe('CompetitionScheduleUpdatedHandler', () => {
  let handler: CompetitionScheduleUpdatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { competitionSchedule: { update: jest.fn() } };
    handler = new CompetitionScheduleUpdatedHandler(mockPrismaService);
  });

  it('should handle CompetitionScheduleUpdatedEvent correctly', async () => {
    // Mock the data for UpdateCompetitionScheduleInput and Metadata
    const mockUpdateCompetitionScheduleInput: UpdateCompetitionScheduleInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      start_at: new Date('2023-08-21T12:00:00Z'),
      end_at: new Date('2023-08-21T12:00:00Z'),
      state: 'DRAFT',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new CompetitionScheduleUpdatedEvent(mockUpdateCompetitionScheduleInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.competition-schedule.create was called correctly
    const expectedCreateObj = {
      data: {
        competition: {
          connect: {
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          },
        },
        start_at: new Date('2023-08-21T12:00:00Z'),
        end_at: new Date('2023-08-21T12:00:00Z'),
        state: 'DRAFT',
        updated_at: mockMetadata.created_at,
      },
      where: {
        id: mockUpdateCompetitionScheduleInput.id,
      },
    };

    expect(mockPrismaService.competitionSchedule.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
