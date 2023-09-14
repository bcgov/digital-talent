import { CreateOpportunityCommand } from './commands/create-opportunity/create-opportunity.command';
import { DeleteOpportunityCommand } from './commands/delete-opportunity/delete-opportunity.command';
import { UpdateOpportunityCommand } from './commands/update-opportunity/update-opportunity.command';
import { CreateOpportunityInput } from './inputs/create-opportunity.input';
import { DeleteOpportunityInput } from './inputs/delete-opportunity.input';
import { UpdateOpportunityInput } from './inputs/update-opportunity.input';
import { OpportunityResolver } from './opportunity.resolver';

describe('OpportunityResolver', () => {
  let resolver: OpportunityResolver;
  let mockCommandBus: any;
  let mockPrismaService: any;

  beforeEach(() => {
    mockCommandBus = { execute: jest.fn() };
    mockPrismaService = {
      opportunity: {
        findMany: jest.fn(),
        findUnique: jest.fn(),
      },
    };
    resolver = new OpportunityResolver(mockCommandBus, mockPrismaService);
  });

  it('should create an opportunity correctly', async () => {
    const input: CreateOpportunityInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      deltek_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
      hiring_manager_id: 'd290f1ee-6c54-4b01-90e6-d701748f0854',
      ministry_id: 'd290f1ee-6c54-4b01-90e6-d701748f0855',
      involvement: 'FULL',
      work_option: 'HYBRID',
      description: 'description',
      candidate_description: 'candidate description',
      team_name: 'team',
      team_description: 'team description',
      work_examples: 'work examples',
    };
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.createOpportunity({ id: userId } as any, input);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new CreateOpportunityCommand({ ...input }, { created_by: userId }),
      }),
    );
  });

  it('should update an opportunity correctly', async () => {
    const input: UpdateOpportunityInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      deltek_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
      hiring_manager_id: 'd290f1ee-6c54-4b01-90e6-d701748f0854',
      ministry_id: 'd290f1ee-6c54-4b01-90e6-d701748f0855',
      involvement: 'FULL',
      work_option: 'HYBRID',
      description: 'description',
      candidate_description: 'candidate description',
      team_name: 'team',
      team_description: 'team description',
      work_examples: 'work examples',
    };
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.updateOpportunity({ id: userId } as any, input);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new UpdateOpportunityCommand(input, { created_by: userId }),
      }),
    );
  });

  it('should delete an opportunity correctly', async () => {
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    const mockDeleteOpportunityInput: DeleteOpportunityInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    };

    await resolver.deleteOpportunity({ id: userId } as any, mockDeleteOpportunityInput.id);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new DeleteOpportunityCommand({ id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' }, { created_by: userId }),
      }),
    );
  });

  // it('should get all opportunitys correctly', async () => {
  //   const mockOpportunitys = [{ id: '1' }, { id: '2' }];
  //   mockPrismaService.opportunity.findMany.mockResolvedValueOnce(mockOpportunitys);

  //   const result = await resolver.opportunitys();

  //   expect(result).toEqual(mockOpportunitys);
  //   expect(mockPrismaService.opportunity.findMany).toHaveBeenCalled();
  // });

  // it('should get a specific opportunity by id correctly', async () => {
  //   const appId = 'mockAppId';
  //   const mockOpportunity = { id: appId };
  //   mockPrismaService.opportunity.findUnique.mockResolvedValueOnce(mockOpportunity);

  //   const result = await resolver.opportunity(appId);

  //   expect(result).toEqual(mockOpportunity);
  //   expect(mockPrismaService.opportunity.findUnique).toHaveBeenCalledWith({ where: { id: appId } });
  // });
});
