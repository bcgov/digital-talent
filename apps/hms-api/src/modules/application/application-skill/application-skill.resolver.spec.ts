import { CreateApplicationSkillInput } from './inputs/create-application-skill.input';
import { UpdateApplicationSkillInput } from './inputs/update-application-skill.input';
import { CreateApplicationSkillCommand } from './commands/create-application-skill/create-application-skill.command';
import { UpdateApplicationSkillCommand } from './commands/update-application-skill/update-application-skill.command';
import { DeleteApplicationSkillCommand } from './commands/delete-application-skill/delete-application-skill.command';
import { ApplicationSkillResolver } from './application-skill.resolver';

describe('ApplicationSkillResolver', () => {
  let resolver: ApplicationSkillResolver;
  let mockCommandBus: any;
  let mockPrismaService: any;

  beforeEach(() => {
    mockCommandBus = { execute: jest.fn() };
    mockPrismaService = {
      applicationSkill: {
        findMany: jest.fn(),
        findUnique: jest.fn(),
      },
    };
    resolver = new ApplicationSkillResolver(mockCommandBus, mockPrismaService);
  });

  it('should create an application-skill correctly', async () => {
    const input: CreateApplicationSkillInput = {
      application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
      skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
      years_experience: 5,
      description: 'mock description',
    };
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.createApplicationSkill({ id: userId } as any, input);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new CreateApplicationSkillCommand(
          {
            application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            ...input,
          },
          { created_by: userId },
        ),
      }),
    );
  });

  it('should update an application-skill correctly', async () => {
    const input: UpdateApplicationSkillInput = {
      application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
      skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
      years_experience: 5,
      description: 'mock description',
    };
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.updateApplicationSkill({ id: userId } as any, input);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new UpdateApplicationSkillCommand(input, { created_by: userId }),
      }),
    );
  });

  it('should delete an application-skill correctly', async () => {
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.deleteApplicationSkill(
      { id: userId } as any,
      'd290f1ee-6c54-4b01-90e6-d701748f0851',
      'd290f1ee-6c54-4b01-90e6-d701748f0852',
    );

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new DeleteApplicationSkillCommand(
          { application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852' },
          { created_by: userId },
        ),
      }),
    );
  });

  it('should get all application-skills correctly', async () => {
    const mockApplicationSkills = [{ id: '1' }, { id: '2' }];
    mockPrismaService.applicationSkill.findMany.mockResolvedValueOnce(mockApplicationSkills);

    const result = await resolver.applicationSkills();

    expect(result).toEqual(mockApplicationSkills);
    expect(mockPrismaService.applicationSkill.findMany).toHaveBeenCalled();
  });

  it('should get a specific application-skill by id correctly', async () => {
    const mockApplicationSkill = {
      application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
      skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
      years_experience: 5,
      description: 'mock description',
    };
    mockPrismaService.applicationSkill.findUnique.mockResolvedValueOnce(mockApplicationSkill);

    const result = await resolver.applicationSkill(mockApplicationSkill.application_id, mockApplicationSkill.skill_id);

    expect(result).toEqual(mockApplicationSkill);
    expect(mockPrismaService.applicationSkill.findUnique).toHaveBeenCalledWith({
      where: {
        application_id_skill_id: {
          application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
          skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
        },
      },
    });
  });
});
