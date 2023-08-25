import { CreatePositionInput } from './inputs/create-position.input';
import { UpdatePositionInput } from './inputs/update-position.input';
import { CreatePositionCommand } from './commands/create-position/create-position.command';
import { UpdatePositionCommand } from './commands/update-position/update-position.command';
import { DeletePositionCommand } from './commands/delete-position/delete-position.command';
import { PositionResolver } from './position.resolver';

describe('PositionResolver', () => {
  let resolver: PositionResolver;
  let mockCommandBus: any;
  let mockPrismaService: any;

  beforeEach(() => {
    mockCommandBus = { execute: jest.fn() };
    mockPrismaService = {
      position: {
        findMany: jest.fn(),
        findUnique: jest.fn(),
      },
    };
    resolver = new PositionResolver(mockCommandBus, mockPrismaService);
  });

  it('should create an position correctly', async () => {
    const input: CreatePositionInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      category: 'BAND',
      name: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      description: 'asdf',
    };
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.createPosition({ id: userId } as any, input);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new CreatePositionCommand({ ...input }, { created_by: userId }),
      }),
    );
  });

  it('should update an position correctly', async () => {
    const input: UpdatePositionInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      category: 'BAND',
      name: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      description: 'asdf',
    };
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.updatePosition({ id: userId } as any, input);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new UpdatePositionCommand(input, { created_by: userId }),
      }),
    );
  });

  it('should delete an position correctly', async () => {
    const appId = 'mockAppId';
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.deletePosition({ id: userId } as any, appId);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new DeletePositionCommand({ id: appId }, { created_by: userId }),
      }),
    );
  });

  it('should get all positions correctly', async () => {
    const mockPositions = [{ id: '1' }, { id: '2' }];
    mockPrismaService.position.findMany.mockResolvedValueOnce(mockPositions);

    const result = await resolver.positions();

    expect(result).toEqual(mockPositions);
    expect(mockPrismaService.position.findMany).toHaveBeenCalled();
  });

  it('should get a specific position by id correctly', async () => {
    const appId = 'mockAppId';
    const mockPosition = { id: appId };
    mockPrismaService.position.findUnique.mockResolvedValueOnce(mockPosition);

    const result = await resolver.position(appId);

    expect(result).toEqual(mockPosition);
    expect(mockPrismaService.position.findUnique).toHaveBeenCalledWith({ where: { id: appId } });
  });
});
