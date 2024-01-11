import { CreateApplicationCommand } from '../commands/create-application/create-application.command';
import { DeleteApplicationCommand } from '../commands/delete-application/delete-application.command';
import { UpdateApplicationCommand } from '../commands/update-application/update-application.command';
import { CreateApplicationInput } from '../inputs/create-application.input';
import { UpdateApplicationInput } from '../inputs/update-application.input';
import { ApplicationResolver } from './application.resolver';

describe('ApplicationResolver', () => {
  let resolver: ApplicationResolver;
  let mockCommandBus: any;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let mockQueryBus: any;
  // let mockPrismaService: any;

  beforeEach(() => {
    mockCommandBus = { execute: jest.fn() };
    mockQueryBus = { execute: jest.fn() };
    resolver = new ApplicationResolver(mockCommandBus, mockQueryBus);
  });

  it('should create an application correctly', async () => {
    const input: CreateApplicationInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      applicant_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      json: {
        exampleKey: 'exampleValue',
        anotherKey: 1234,
      },
    };
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.createApplication({ id: userId } as any, input);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new CreateApplicationCommand({ applicant_id: userId, ...input }, { created_by: userId }),
      }),
    );
  });

  it('should update an application correctly', async () => {
    const input: UpdateApplicationInput = {
      id: 'mockId',
      applicant_id: 'newMockApplicantId',
    };
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.updateApplication({ id: userId } as any, input);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new UpdateApplicationCommand(input, { created_by: userId }),
      }),
    );
  });

  it('should delete an application correctly', async () => {
    const appId = 'mockAppId';
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.deleteApplication({ id: userId } as any, appId);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new DeleteApplicationCommand({ id: appId }, { created_by: userId }),
      }),
    );
  });

  // it('should get all applications correctly', async () => {
  //   const mockApplications = [{ id: '1' }, { id: '2' }];
  //   mockPrismaService.application.findMany.mockResolvedValueOnce(mockApplications);

  //   const result = await resolver.applications();

  //   expect(result).toEqual(mockApplications);
  //   expect(mockPrismaService.application.findMany).toHaveBeenCalled();
  // });

  // it('should get a specific application by id correctly', async () => {
  //   const appId = 'mockAppId';
  //   const mockApplication = { id: appId };
  //   mockPrismaService.application.findUnique.mockResolvedValueOnce(mockApplication);

  //   const result = await resolver.application(appId);

  //   expect(result).toEqual(mockApplication);
  //   expect(mockPrismaService.application.findUnique).toHaveBeenCalledWith({ where: { id: appId } });
  // });
});
