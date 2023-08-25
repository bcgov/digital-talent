import { CreateCompetitionInput } from '../inputs/create-competition.input';
import { UpdateCompetitionInput } from '../inputs/update-competition.input';
import { CreateCompetitionCommand } from '../commands/create-competition/create-competition.command';
import { UpdateCompetitionCommand } from '../commands/update-competition/update-competition.command';
import { DeleteCompetitionCommand } from '../commands/delete-competition/delete-competition.command';
import { CompetitionCommandResolver } from './competition-command.resolver';
import { DeleteCompetitionInput } from '../inputs/delete-competition.input';

describe('CompetitionCommandResolver', () => {
  let resolver: CompetitionCommandResolver;
  let mockCommandBus: any;
  // let mockPrismaService: any;

  beforeEach(() => {
    mockCommandBus = { execute: jest.fn() };
    // mockPrismaService = {
    //   competition: {
    //     findMany: jest.fn(),
    //     findUnique: jest.fn(),
    //   },
    // };
    resolver = new CompetitionCommandResolver(mockCommandBus);
  });

  it('should create an competition correctly', async () => {
    const input: CreateCompetitionInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      classification_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      deltek_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      recruiter_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      category: 'CMH',
    };
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.createCompetition({ id: userId } as any, input);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new CreateCompetitionCommand({ ...input }, { created_by: userId }),
      }),
    );
  });

  it('should update an competition correctly', async () => {
    const input: UpdateCompetitionInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      classification_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      deltek_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      recruiter_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      category: 'CMH',
    };
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.updateCompetition({ id: userId } as any, input);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new UpdateCompetitionCommand(input, { created_by: userId }),
      }),
    );
  });

  it('should delete an competition correctly', async () => {
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    const mockDeleteCompetitionInput: DeleteCompetitionInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    };

    await resolver.deleteCompetition({ id: userId } as any, mockDeleteCompetitionInput);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new DeleteCompetitionCommand({ id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' }, { created_by: userId }),
      }),
    );
  });

  // it('should get all competitions correctly', async () => {
  //   const mockCompetitions = [{ id: '1' }, { id: '2' }];
  //   mockPrismaService.competition.findMany.mockResolvedValueOnce(mockCompetitions);

  //   const result = await resolver.competitions();

  //   expect(result).toEqual(mockCompetitions);
  //   expect(mockPrismaService.competition.findMany).toHaveBeenCalled();
  // });

  // it('should get a specific competition by id correctly', async () => {
  //   const appId = 'mockAppId';
  //   const mockCompetition = { id: appId };
  //   mockPrismaService.competition.findUnique.mockResolvedValueOnce(mockCompetition);

  //   const result = await resolver.competition(appId);

  //   expect(result).toEqual(mockCompetition);
  //   expect(mockPrismaService.competition.findUnique).toHaveBeenCalledWith({ where: { id: appId } });
  // });
});
