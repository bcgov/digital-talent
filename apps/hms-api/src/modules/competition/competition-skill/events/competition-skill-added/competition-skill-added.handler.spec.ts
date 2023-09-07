import { CompetitionSkillAddedEvent } from './competition-skill-added.event';
import { CompetitionSkillAddedHandler } from './competition-skill-added.handler';
import { AddCompetitionSkillInput } from '../../inputs/add-competition-skill.input';
import { Metadata } from '../../../../event-store/types/metadata.type';

describe('CompetitionSkillAddedHandler', () => {
  let handler: CompetitionSkillAddedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { competitionSkill: { create: jest.fn() } };
    handler = new CompetitionSkillAddedHandler(mockPrismaService);
  });

  it('should handle CompetitionSkillAddedEvent correctly', async () => {
    // Mock the data for AddCompetitionSkillInput and Metadata
    const mockAddCompetitionSkillInput: AddCompetitionSkillInput = {
      competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      min_years_experience: 2,
      is_required: true,
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new CompetitionSkillAddedEvent(mockAddCompetitionSkillInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.competition-skill.create was called correctly
    const expectedAddObj = {
      data: {
        competition: {
          connect: {
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          },
        },
        skill: {
          connect: {
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          },
        },
        min_years_experience: 2,
        is_required: true,
        created_at: mockMetadata.created_at,
      },
    };

    expect(mockPrismaService.competitionSkill.create).toHaveBeenCalledWith(expectedAddObj);
  });
});
