import { CreateOpportunityLocationCommand } from './commands/create-opportunity-location/create-opportunity-location.command';
import { DeleteOpportunityLocationCommand } from './commands/delete-opportunity-location/delete-opportunity-location.command';
import { CreateOpportunityLocationInput } from './inputs/create-opportunity-location.input';
import { OpportunityLocationResolver } from './opportunity-location.resolver';

describe('OpportunityLocationResolver', () => {
  let resolver: OpportunityLocationResolver;
  let mockCommandBus: any;
  let mockPrismaService: any;

  beforeEach(async () => {
    mockCommandBus = { execute: jest.fn() };
    mockPrismaService = {
      opportunityLocation: {
        findMany: jest.fn(),
        findUnique: jest.fn(),
      },
    };

    resolver = new OpportunityLocationResolver(mockCommandBus, mockPrismaService);
  });
  const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';
  const opportunity_id = 'd290f1ee-6c54-4b01-90e6-d701748f0851';
  const location_id = 'd290f1ee-6c54-4b01-90e6-d701748f0852';
  const opportunity_id2 = 'd290f1ee-6c54-4b01-90e6-d701748f0852';
  const location_id2 = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should create an opportunityLocation correctly', async () => {
    const input: CreateOpportunityLocationInput = {
      opportunity_id,
      location_id,
    };

    const input2: CreateOpportunityLocationInput = {
      opportunity_id: opportunity_id2,
      location_id: location_id2,
    };

    await resolver.createOpportunityLocation({ id: userId } as any, input);

    await resolver.createOpportunityLocation({ id: userId } as any, input2);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new CreateOpportunityLocationCommand({ ...input }, { created_by: userId }),
      }),
    );
  });

  it('should get all opportunityLocations correctly', async () => {
    const mockOpportunityLocations = [{ id: '1' }, { id: '2' }];
    mockPrismaService.opportunityLocation.findMany.mockResolvedValueOnce(mockOpportunityLocations);

    const result = await resolver.opportunityLocations();
    // eslint-disable-next-line no-console
    console.log(result);
    expect(result).toEqual(mockOpportunityLocations);
    expect(mockPrismaService.opportunityLocation.findMany).toHaveBeenCalled();
  });

  it('should get a specific opportunityLocation by id correctly', async () => {
    const mockOpportunityLocation = { opportunity_id, location_id };
    mockPrismaService.opportunityLocation.findUnique.mockResolvedValueOnce(mockOpportunityLocation);

    const result = await resolver.opportunityLocation(opportunity_id, location_id);

    expect(result).toEqual(mockOpportunityLocation);
    expect(mockPrismaService.opportunityLocation.findUnique).toHaveBeenCalledWith({
      where: { opportunity_id_location_id: mockOpportunityLocation },
    });
  });

  it('should delete an opportunityLocation correctly', async () => {
    await resolver.deleteOpportunityLocation({ id: userId } as any, opportunity_id, location_id);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new DeleteOpportunityLocationCommand({ opportunity_id, location_id }, { created_by: userId }),
      }),
    );
  });
});
