import { CreateApplicationLocationInput } from './inputs/create-application-location.input';
import { UpdateApplicationLocationInput } from './inputs/update-application-location.input';
import { CreateApplicationLocationCommand } from './commands/create-application-location/create-application-location.command';
import { UpdateApplicationLocationCommand } from './commands/update-application-location/update-application-location.command';
import { DeleteApplicationLocationCommand } from './commands/delete-application-location/delete-application-location.command';
import { ApplicationLocationResolver } from './application-location.resolver';

describe('ApplicationLocationResolver', () => {
  let resolver: ApplicationLocationResolver;
  let mockCommandBus: any;
  let mockPrismaService: any;

  beforeEach(() => {
    mockCommandBus = { execute: jest.fn() };
    mockPrismaService = {
      applicationLocation: {
        findMany: jest.fn(),
        findUnique: jest.fn(),
      },
    };
    resolver = new ApplicationLocationResolver(mockCommandBus, mockPrismaService);
  });

  it('should create an application-location correctly', async () => {
    const input: CreateApplicationLocationInput = {
      location_id: 'mockId',
      application_id: 'mockId',
      rank: 5,
    };
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.createApplicationLocation({ id: userId } as any, input);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new CreateApplicationLocationCommand(
          { location_id: 'mockId', application_id: 'mockId', ...input },
          { created_by: userId },
        ),
      }),
    );
  });

  it('should update an application-location correctly', async () => {
    const input: UpdateApplicationLocationInput = {
      location_id: 'mockId',
      application_id: 'mockId',
      rank: 6,
    };
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.updateApplicationLocation({ id: userId } as any, input);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new UpdateApplicationLocationCommand(input, { created_by: userId }),
      }),
    );
  });

  it('should delete an application-location correctly', async () => {
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.deleteApplicationLocation({ id: userId } as any, 'mockId2', 'mockId');

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new DeleteApplicationLocationCommand(
          { location_id: 'mockId', application_id: 'mockId2' },
          { created_by: userId },
        ),
      }),
    );
  });

  it('should get all application-locations correctly', async () => {
    const mockApplicationLocations = [
      { location_id: 'mockId', application_id: 'mockId2' },
      { location_id: 'mockId3', application_id: 'mockId4' },
    ];
    mockPrismaService.applicationLocation.findMany.mockResolvedValueOnce(mockApplicationLocations);

    const result = await resolver.applicationLocations();

    expect(result).toEqual(mockApplicationLocations);
    expect(mockPrismaService.applicationLocation.findMany).toHaveBeenCalled();
  });

  it('should get a specific application-location by id correctly', async () => {
    const mockApplicationLocation = { location_id: 'mockId', application_id: 'mockId2' };
    mockPrismaService.applicationLocation.findUnique.mockResolvedValueOnce(mockApplicationLocation);

    const result = await resolver.applicationLocation('mockId', 'mockId2');

    expect(result).toEqual(mockApplicationLocation);
    expect(mockPrismaService.applicationLocation.findUnique).toHaveBeenCalledWith({
      where: {
        application_id_location_id: {
          application_id: 'mockId',
          location_id: 'mockId2',
        },
      },
    });
  });
});
