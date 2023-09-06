import { CreateLocationInput } from './inputs/create-location.input';
import { UpdateLocationInput } from './inputs/update-location.input';
import { CreateLocationCommand } from './commands/create-location/create-location.command';
import { UpdateLocationCommand } from './commands/update-location/update-location.command';
import { DeleteLocationCommand } from './commands/delete-location/delete-location.command';
import { LocationResolver } from './location.resolver';

describe('LocationResolver', () => {
  let resolver: LocationResolver;
  let mockCommandBus: any;
  let mockPrismaService: any;

  beforeEach(() => {
    mockCommandBus = { execute: jest.fn() };
    mockPrismaService = {
      location: {
        findMany: jest.fn(),
        findUnique: jest.fn(),
      },
    };
    resolver = new LocationResolver(mockCommandBus, mockPrismaService);
  });

  it('should create an location correctly', async () => {
    const input: CreateLocationInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      deltek_id: 'test_deltek_id',
      name: 'test_name',
      postal_code: 'V9M 3K2',
      lat: 0.23,
      lon: 0.25,
    };
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.createLocation({ id: userId } as any, input);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new CreateLocationCommand({ ...input }, { created_by: userId }),
      }),
    );
  });

  it('should update an location correctly', async () => {
    const input: UpdateLocationInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      deltek_id: 'test_deltek_id2',
      name: 'test_name2',
      postal_code: 'V9M 3K3',
      lat: 0.24,
      lon: 0.24,
    };
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.updateLocation({ id: userId } as any, input);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new UpdateLocationCommand(input, { created_by: userId }),
      }),
    );
  });

  it('should delete an location correctly', async () => {
    const appId = 'mockAppId';
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.deleteLocation({ id: userId } as any, appId);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new DeleteLocationCommand({ id: appId }, { created_by: userId }),
      }),
    );
  });

  it('should get all locations correctly', async () => {
    const mockLocations = [{ id: '1' }, { id: '2' }];
    mockPrismaService.location.findMany.mockResolvedValueOnce(mockLocations);

    const result = await resolver.locations();

    expect(result).toEqual(mockLocations);
    expect(mockPrismaService.location.findMany).toHaveBeenCalled();
  });

  it('should get a specific location by id correctly', async () => {
    const appId = 'mockAppId';
    const mockLocation = { id: appId };
    mockPrismaService.location.findUnique.mockResolvedValueOnce(mockLocation);

    const result = await resolver.location(appId);

    expect(result).toEqual(mockLocation);
    expect(mockPrismaService.location.findUnique).toHaveBeenCalledWith({ where: { id: appId } });
  });
});
