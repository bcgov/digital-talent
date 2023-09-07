import { AddCompetitionSkillInput } from '../inputs/add-competition-skill.input';
import { RemoveCompetitionSkillInput } from '../inputs/remove-competition-skill.input';
import { AddCompetitionSkillCommand } from '../commands/add-competition-skill/add-competition-skill.command';
import { RemoveCompetitionSkillCommand } from '../commands/remove-competition-skill/remove-competition-skill.command';
import { CompetitionSkillCommandResolver } from './competition-skill-command.resolver';

describe('CompetitionSkillCommandResolver', () => {
  let resolver: CompetitionSkillCommandResolver;
  let mockCommandBus: any;

  beforeEach(() => {
    mockCommandBus = { execute: jest.fn() };
    resolver = new CompetitionSkillCommandResolver(mockCommandBus);
  });

  it('should add an competition-skill correctly', async () => {
    const input: AddCompetitionSkillInput = {
      competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      min_years_experience: 2,
      is_required: true,
    };
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.addCompetitionSkill({ id: userId } as any, input);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new AddCompetitionSkillCommand({ ...input }, { created_by: userId }),
      }),
    );
  });

  it('should remove an competition-skill correctly', async () => {
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    const input: RemoveCompetitionSkillInput = {
      competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    };

    await resolver.removeCompetitionSkill({ id: userId } as any, input);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new RemoveCompetitionSkillCommand(
          { competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852' },
          { created_by: userId },
        ),
      }),
    );
  });
});
