import { CreateOpportunitySkillCommand } from '../commands/create-opportunity-skill/create-opportunity-skill.command';
import { DeleteOpportunitySkillCommand } from '../commands/delete-opportunity-skill/delete-opportunity-skill.command';
import { CreateOpportunitySkillInput } from '../inputs/create-opportunity-skill.input';
import { OpportunitySkillResolver } from './opportunity-skill.resolver';

describe('OpportunitySkillResolver', () => {
  let resolver: OpportunitySkillResolver;
  let mockCommandBus: any;
  let mockQueryBus: any;

  beforeEach(async () => {
    mockCommandBus = { execute: jest.fn() };
    mockQueryBus = { execute: jest.fn() };

    resolver = new OpportunitySkillResolver(mockCommandBus, mockQueryBus);
  });
  const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';
  const opportunity_id = 'd290f1ee-6c54-4b01-90e6-d701748f0851';
  const skill_id = 'd290f1ee-6c54-4b01-90e6-d701748f0852';
  const opportunity_id2 = 'd290f1ee-6c54-4b01-90e6-d701748f0852';
  const skill_id2 = 'd290f1ee-6c54-4b01-90e6-d701748f0853';
  const input: CreateOpportunitySkillInput = {
    opportunity_id,
    skill_id,
  };

  const input2: CreateOpportunitySkillInput = {
    opportunity_id: opportunity_id2,
    skill_id: skill_id2,
  };
  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should create an opportunitySkill correctly', async () => {
    await resolver.createOpportunitySkill({ id: userId } as any, input);

    await resolver.createOpportunitySkill({ id: userId } as any, input2);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new CreateOpportunitySkillCommand({ ...input }, { created_by: userId }),
      }),
    );
  });

  it('should get all opportunitySkills correctly', async () => {
    const mockOpportunitySkills = [{ id: '1' }, { id: '2' }];
    mockQueryBus.execute.mockResolvedValueOnce(mockOpportunitySkills);

    const result = await resolver.opportunitySkills();
    expect(result).toEqual(mockOpportunitySkills);
    expect(mockQueryBus.execute).toHaveBeenCalled();
  });

  it('should get a specific opportunitySkill by id correctly', async () => {
    const mockOpportunitySkill = { input };
    mockQueryBus.execute.mockResolvedValueOnce(mockOpportunitySkill);

    const result = await resolver.opportunitySkill(opportunity_id, skill_id);

    expect(result).toEqual(mockOpportunitySkill);
    expect(mockQueryBus.execute).toHaveBeenCalledWith({
      opportunity_id,
      skill_id,
    });
  });

  it('should delete an opportunitySkill correctly', async () => {
    await resolver.deleteOpportunitySkill({ id: userId } as any, opportunity_id, skill_id);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new DeleteOpportunitySkillCommand({ opportunity_id, skill_id }, { created_by: userId }),
      }),
    );
  });
});
