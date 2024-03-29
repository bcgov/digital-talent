import { SkillCategory } from '../../../@generated/prisma-nestjs-graphql';
import { CreateSkillCommand } from '../commands/create-skill/create-skill.command';
import { DeleteSkillCommand } from '../commands/delete-skill/delete-skill.command';
import { UpdateSkillCommand } from '../commands/update-skill/update-skill.command';
import { CreateSkillInput } from '../inputs/create-skill.input';
import { UpdateSkillInput } from '../inputs/update-skill.input';
import { SkillResolver } from './skill.resolver';

describe('SkillResolver', () => {
  let resolver: SkillResolver;
  let mockCommandBus: any;
  let mockQueryBus: any;

  beforeEach(() => {
    mockCommandBus = { execute: jest.fn() };
    mockQueryBus = { execute: jest.fn() };
    resolver = new SkillResolver(mockCommandBus, mockQueryBus);
  });

  it('should create an skill correctly', async () => {
    const input: CreateSkillInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      category: SkillCategory.CLOUD_PLATFORMS,
      name: 'test_name',
      description: 'test_description',
    };
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.createSkill({ id: userId } as any, input);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new CreateSkillCommand({ ...input }, { created_by: userId }),
      }),
    );
  });

  it('should update an skill correctly', async () => {
    const input: UpdateSkillInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      category: SkillCategory.CLOUD_PLATFORMS,
      name: 'test_name',
      description: 'test_description',
    };
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.updateSkill({ id: userId } as any, input);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new UpdateSkillCommand(input, { created_by: userId }),
      }),
    );
  });

  it('should delete an skill correctly', async () => {
    const appId = 'mockAppId';
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.deleteSkill({ id: userId } as any, appId);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new DeleteSkillCommand({ id: appId }, { created_by: userId }),
      }),
    );
  });

  it('should get all skills correctly todo: rewrite as it uses query now', async () => {
    const mockSkills = [{ id: '1' }, { id: '2' }];
    mockQueryBus.execute.mockResolvedValueOnce(mockSkills);

    const result = await resolver.skills();

    expect(result).toEqual(mockSkills);
    expect(mockQueryBus.execute).toHaveBeenCalled();
  });

  it('should get a specific skill by id correctly todo: rewrite as it uses query now', async () => {
    const appId = 'mockAppId';
    const mockSkill = { id: appId };
    mockQueryBus.execute.mockResolvedValueOnce(mockSkill);

    const result = await resolver.skill(appId);

    expect(result).toEqual(mockSkill);
    expect(mockQueryBus.execute).toHaveBeenCalledWith({ id: appId });
  });
});
