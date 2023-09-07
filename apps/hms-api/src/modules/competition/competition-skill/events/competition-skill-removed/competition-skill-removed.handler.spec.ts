import { CompetitionSkillRemovedEvent } from './competition-skill-removed.event';
import { CompetitionSkillRemovedHandler } from './competition-skill-removed.handler';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { RemoveCompetitionSkillInput } from '../../inputs/remove-competition-skill.input';

describe('CompetitionSkillRemovedHandler', () => {
  let handler: CompetitionSkillRemovedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { competitionSkill: { update: jest.fn() } };
    handler = new CompetitionSkillRemovedHandler(mockPrismaService);
  });

  it('should handle CompetitionSkillRemovedEvent correctly', async () => {
    // Mock the data for RemoveCompetitionSkillInput and Metadata
    const mockRemoveCompetitionSkillInput: RemoveCompetitionSkillInput = {
      competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new CompetitionSkillRemovedEvent(mockRemoveCompetitionSkillInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.competitionSkill.create was called correctly
    const expectedAddObj = {
      data: {
        deleted_at: mockMetadata.created_at,
      },
      where: {
        competition_id_skill_id: {
          competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        },
      },
    };

    expect(mockPrismaService.competitionSkill.update).toHaveBeenCalledWith(expectedAddObj);
  });
});
