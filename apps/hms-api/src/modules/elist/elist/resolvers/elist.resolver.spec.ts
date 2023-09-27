import { CreateElistCommand } from '../commands/create-elist/create-elist.command';
import { DeleteElistCommand } from '../commands/delete-elist/delete-elist.command';
import { UpdateElistCommand } from '../commands/update-elist/update-elist.command';
import { CreateElistInput } from '../inputs/create-elist.input';
import { UpdateElistInput } from '../inputs/update-elist.input';
import { ElistResolver } from './elist.resolver';

describe('ElistResolver', () => {
  let resolver: ElistResolver;
  let mockCommandBus: any;
  let mockQueryBus: any;

  beforeEach(() => {
    mockCommandBus = { execute: jest.fn() };
    mockQueryBus = { execute: jest.fn() };
    resolver = new ElistResolver(mockCommandBus, mockQueryBus);
  });

  it('should create an elist correctly', async () => {
    const input: CreateElistInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      applicant_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      rank: 5,
    };
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.createElist({ id: userId } as any, input);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new CreateElistCommand({ applicant_id: userId, ...input }, { created_by: userId }),
      }),
    );
  });

  it('should update an elist correctly', async () => {
    const input: UpdateElistInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      applicant_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
      competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
      rank: 5,
    };
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.updateElist({ id: userId } as any, input);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new UpdateElistCommand(input, { created_by: userId }),
      }),
    );
  });

  it('should delete an elist correctly', async () => {
    const appId = 'mockAppId';
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.deleteElist({ id: userId } as any, appId);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new DeleteElistCommand({ id: appId }, { created_by: userId }),
      }),
    );
  });

  it('should get all elists correctly', async () => {
    const mockElists = [{ id: '1' }, { id: '2' }];
    mockQueryBus.execute.mockResolvedValueOnce(mockElists);

    const result = await resolver.elists();

    expect(result).toEqual(mockElists);
    expect(mockQueryBus.execute).toHaveBeenCalled();
  });

  it('should get a specific elist by id correctly', async () => {
    const appId = 'mockAppId';
    const mockElist = { id: appId };
    mockQueryBus.execute.mockResolvedValueOnce(mockElist);

    const result = await resolver.elist(appId);

    expect(result).toEqual(mockElist);
    expect(mockQueryBus.execute).toHaveBeenCalledWith({ id: appId });
  });
});
