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

  it('should get all positions correctly', async () => {
    const mockPositions = [{ id: '1' }, { id: '2' }];
    mockPrismaService.position.findMany.mockResolvedValueOnce(mockPositions);

    const result = await resolver.getPositions();

    expect(result).toEqual(mockPositions);
    expect(mockPrismaService.position.findMany).toHaveBeenCalled();
  });

  it('should get a specific position by id correctly', async () => {
    const appId = 'mockAppId';
    const mockPosition = { id: appId };
    mockPrismaService.position.findUnique.mockResolvedValueOnce(mockPosition);

    const result = await resolver.getPosition(appId);

    expect(result).toEqual(mockPosition);
    expect(mockPrismaService.position.findUnique).toHaveBeenCalledWith({ where: { id: appId } });
  });
});
